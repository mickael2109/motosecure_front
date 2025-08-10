import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/organisms/Sidebar';
import { useEffect, useState, type SetStateAction } from 'react';
import { useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { getToken, getUser } from '../../features/user/selectors';
import { getAllMotoUser } from '../../features/moto/thunk';
import { selectAllMotoUser } from '../../features/moto/selectors';
import { getAllHistoCoordinateMoto } from '../../features/coordinate/thunk';
import LoadingPage from '../../utils/loadingPage';
import NotifItem from '../../components/organisms/NotifItem';
import io from 'socket.io-client';


const socket = io('https://mc-back.onrender.com', {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

const Layout = () => {
    
    const dispatch = useAppDispatch();
    const user = useSelector(getUser);
    const token = useSelector(getToken);
    const moto = useSelector(selectAllMotoUser);
    const [isLoading, setIsLoading] = useState(true);
    const [notifReceive, setNotifReceive] = useState(false)    
    const [text, setText] = useState('')


    // useEffect(() => {
    //     if (token && user) {
    //         setIsLoading(false)
    //     }
    // }, [token, user]);

   
    useEffect(() => {
       socket.on('statusmoto', (socketValue) => {
         console.log("status moto : ",socketValue);
         
       });
   
       return () => {
         socket.off('statusmoto');
       };
    }, []);


   useEffect(() => {
        const handleAlerte = (socketValue: { message: SetStateAction<string>; }) => {
            setNotifReceive(true);
            setText(socketValue.message);

            // Démarrer le timer directement
            const timer = setTimeout(() => {
            setNotifReceive(false);
            setText('');
            }, 5000);

            return () => clearTimeout(timer);
        };

        socket.on('alerte', handleAlerte);

        return () => {
            socket.off('alerte', handleAlerte);
        };
    }, []); 


    //   // 1. Réinitialiser notifReceive à true toutes les 20s
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setNotifReceive(true);
    //     }, 20000); // 20 secondes

    //     return () => clearInterval(interval); // nettoyage à la destruction du composant
    // }, []);

    // // 2. Masquer la notification après 5s si elle est active
    // useEffect(() => {
    //     if (notifReceive) {
    //         const timer = setTimeout(() => {
    //             setNotifReceive(false);
    //         }, 5000); // 5 secondes

    //         return () => clearTimeout(timer);
    //     }
    // }, [notifReceive]);
 


    useEffect(() => {
        const fetchData = async () => {
            if (token && user && isLoading) {
                await dispatch(getAllMotoUser(user.id)).unwrap();
                

                if(moto.length > 0){
                    await dispatch(getAllHistoCoordinateMoto(moto[0].id)).unwrap();
                }

                setIsLoading(false);
            }
        }
        fetchData();

    }, [dispatch, moto, token, user, isLoading]);


  

     if (isLoading) {
        return <LoadingPage></LoadingPage>
    }

    return (
       <div className="fixed top-0 left-0 w-full">

            {/* Notification */}
            {notifReceive && <NotifItem text={text}/>}
       
            {/* Contenu principal */}
            <div className="flex-1 overflow-hidden h-[100vh]">
                <Outlet />
            </div>

            {/* sidebar */}
            <div><Sidebar /></div>

        </div>

    );
}

export default Layout;

