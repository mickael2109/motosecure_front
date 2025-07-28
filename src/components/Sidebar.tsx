import { NavLink } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const Sidebar = () => {

    const [path, setPath] = useState('home')

    return (
        <div className="fixed w-full flex flex-row items-center justify-center bottom-5 z-9999">
           <div  className="flex flex-row justify-center items-center gap-1 p-4  dark:bg-white/10 bg-black/10 backdrop-blur-sm h-[8vh] rounded-full">
                <div
                    className={`absolute top-2 left-2 w-15 h-15 rounded-full transition-all duration-500 bg-second_mc -z-1 ${ 
                        path === "home"
                            ? "translate-x-[75px]"
                            : path === "carte"
                            ? "translate-x-[9px]"
                            : path === "profile"
                            ? "translate-x-[141px]"
                            : ""
                        }`}
                    ></div>
                <NavLink to="/carte" className={`${path === "carte" && "dock-active text-white"}  rounded-full p-4 `} onClick={() => setPath("carte")}>
                    <i className="text-[30px]"><FaMapLocationDot></FaMapLocationDot></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "home" && "dock-active text-white"} rounded-full p-4`} onClick={() => setPath("home")}>
                    <i className="text-[30px]"><RiHome3Line></RiHome3Line></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "profile" && "dock-active text-white "} rounded-full p-4`} onClick={() => setPath("profile")}>
                    <i className="text-[30px]"><FaRegUserCircle></FaRegUserCircle></i>
                </NavLink>
           </div>
        </div>
    );
}

export default Sidebar;
