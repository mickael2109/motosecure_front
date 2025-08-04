import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/organisms/Sidebar';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { getToken, getUser } from '../../features/user/selectors';
import { getAllMotoUser } from '../../features/moto/thunk';
import { selectAllMotoUser } from '../../features/moto/selectors';
import { getAllHistoCoordinateMoto } from '../../features/coordinate/thunk';
import LoadingPage from '../../utils/loadingPage';

const Layout = () => {
    
    const dispatch = useAppDispatch();
    const user = useSelector(getUser);
    const token = useSelector(getToken);
    const moto = useSelector(selectAllMotoUser);
    const [isLoading, setIsLoading] = useState(true);
    


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

