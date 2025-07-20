import { Outlet } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';

const Layout = () => {
    
 

    return (
       <div className="fixed top-0 left-0 w-full">

       
            {/* Contenu principal */}
            <div className="flex-1 overflow-hidden h-[100vh]">
                <Outlet />
            </div>

            {/* sidebar */}
            {/* <div><Sidebar /></div> */}

        </div>

    );
}

export default Layout;

