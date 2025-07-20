import {Routes, Route} from 'react-router-dom'
import { Home, Layout, Profil } from '../pages/Home';

const HomeRoute = () => {
    return (
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/profil" element={<Profil/>}/>
          </Route>
          
        </Routes>
    );
}

export default HomeRoute;
