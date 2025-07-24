import {Routes, Route} from 'react-router-dom'
import { Carte, Layout, Profil } from '../pages/Home';

const HomeRoute = () => {
    return (
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Carte/>}/> 
            {/* <Route index element={<Home/>}/> */}
            <Route path="/profil" element={<Profil/>}/>
          </Route>
          
        </Routes>
    );
}

export default HomeRoute;
