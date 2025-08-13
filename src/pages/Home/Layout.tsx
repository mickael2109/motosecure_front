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
import { selectCoordinateHisto } from '../../features/coordinate/selectors';
import { parseDateKey } from '../../utils/convertDate';
import type { CoordinateHistoryMap } from '../../types/CoordinateInterface';
import { addCoordinateToday } from '../../features/coordinate/slice';
import { socketCoordMoto, socketVibrationAndStatusMoto } from '../../features/moto/slice';


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
        console.log("socketValue: ",socketValue);
        
         dispatch(socketVibrationAndStatusMoto({ motoId: socketValue.motoId, status: socketValue.status, isVibration: socketValue.isVibration}));
       });
   
       return () => {
         socket.off('statusmoto');
       };
    }, [dispatch]);


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


  
    const coordinateHisto = useSelector(selectCoordinateHisto)
    // console.log("coordinateHisto: ",coordinateHisto);

    const sortedCoordinateHisto = Object.entries(coordinateHisto ?? {})
    .sort(([keyA], [keyB]) => {
        const dateA = parseDateKey(keyA);
        const dateB = parseDateKey(keyB);
        return dateB.getTime() - dateA.getTime();
    })
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {} as CoordinateHistoryMap);
    

    useEffect(() => {
        dispatch(addCoordinateToday({ data: sortedCoordinateHisto[Object.keys(sortedCoordinateHisto)[0]]  }));
    }, [dispatch, sortedCoordinateHisto]);
    

    useEffect(() => {
       socket.on('gps', (socketValue) => {
        console.log("gps : ",socketValue);
        const { data, status } = socketValue
        if(status === "stay")   dispatch(socketCoordMoto({ long: data.longitude, lat: data.latitude, speed: data.speed }));
        else dispatch(socketCoordMoto({ long: data.long, lat: data.lat, speed: data.speed }));
         
       });
   
       return () => {
         socket.off('gps');
       };
    }, [dispatch]);


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

