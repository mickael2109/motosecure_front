import { NavLink } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {

    const [path, setPath] = useState('home')

    return (
        <div className="fixed w-full flex flex-row items-center justify-center bottom-5 z-9999">
           <div  className="flex flex-row justify-center items-center gap-1 p-4  dark:bg-white/10 bg-black/10 backdrop-blur-sm h-[10vh] rounded-full">
                <NavLink to="/carte" className={`${path === "carte" && "dock-active  bg-second_mc text-white"}  rounded-full p-4 `} onClick={() => setPath("carte")}>
                    <i className="text-[30px]"><FaRegUserCircle></FaRegUserCircle></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "home" && "dock-active  bg-second_mc text-white"} rounded-full p-4`} onClick={() => setPath("home")}>
                    <i className="text-[30px]"><RiHome3Line></RiHome3Line></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "settings" && "dock-active bg-second_mc text-white"} rounded-full p-4`} onClick={() => setPath("settings")}>
                    <i className="text-[30px]"><IoMdSettings></IoMdSettings></i>
                </NavLink>
           </div>
        </div>
    );
}

export default Sidebar;
