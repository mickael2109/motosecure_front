import {Routes, Route} from 'react-router-dom'
import { Carte, History, Home, Layout, Profil } from '../pages/Home';

const HomeRoute = () => {
    return (
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/carte" element={<Carte/>}/> 
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/history" element={<History/>}/>
          </Route>
          
        </Routes>
    );
}

export default HomeRoute;
