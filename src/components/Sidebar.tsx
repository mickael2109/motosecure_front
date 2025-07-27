import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { RiHome3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {

    const [path, setPath] = useState('home')

    return (
        <div className="fixed w-full flex flex-row items-center justify-center bottom-5 z-9999">
           <div  className="flex flex-row justify-center items-center gap-1 p-4  dark:bg-white/10 bg-black/10 backdrop-blur-sm h-[10vh] rounded-full">
                <NavLink to="/" className={`${path === "profil"? "dock-active ": ""} bg-second_mc text-white rounded-full p-4 `} onClick={() => setPath("profil")}>
                    <i className="text-[30px]"><RiHome3Line></RiHome3Line></i>
                </NavLink>
                
                <NavLink to="/carte" className={`${path === "home"? "dock-active ": ""} rounded-full p-4`} onClick={() => setPath("home")}>
                    <i className="text-[30px]"><FaRegUserCircle></FaRegUserCircle></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "logout"? "dock-active ": ""} rounded-full p-4`} onClick={() => setPath("logout")}>
                    <i className="text-[30px]"><IoIosLogOut></IoIosLogOut></i>
                </NavLink>
           </div>
           {/* <div  className="flex flex-row px-6 py-4 justify-center gap-8   rounded-full absolute -z-1">
                <NavLink to="/home/profil" className={`${path === "profil"? "dock-active ": ""} bg-second_mc  backdrop-blur-md `} onClick={() => setPath("profil")}>
                    <i className="text-[35px]"><FaRegUserCircle></FaRegUserCircle></i>
                </NavLink>
                
                <NavLink to="/home" className={`${path === "home"? "dock-active ": ""}`} onClick={() => setPath("home")}>
                    <i className="text-[25px]"><RiHome3Line></RiHome3Line></i>
                </NavLink>
                
                <NavLink to="/" >
                    <i className="text-[25px]"><IoIosLogOut></IoIosLogOut></i>
                </NavLink>
           </div> */}
        </div>
    );
}

export default Sidebar;
