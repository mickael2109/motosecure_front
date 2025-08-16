import {Routes, Route} from 'react-router-dom'
import { Carte, History, Home, Layout, Notification, Profil } from '../pages/Home';

const HomeRoute = () => {
    return (
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/carte" element={<Carte/>}/> 
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/notification" element={<Notification/>}/>
          </Route>
          
        </Routes>
    );
}

export default HomeRoute;
