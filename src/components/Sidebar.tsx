import { NavLink } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const Sidebar = () => {

    const [path, setPath] = useState('home')

    return (
        <div className="fixed w-full flex flex-row items-center justify-center bottom-5 z-9999">
           <div  className="flex flex-row justify-center items-center gap-1 p-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full ">
                <div
                    className={`absolute top-2 h-md:break_md_sid left-2 w-14 h-14 rounded-full transition-all duration-500 bg-second_mc -z-1 ${ 
                        path === "home"
                            ? "translate-x-[65px] h-md:break_md_translate_home"
                            : path === "carte"
                            ? "translate-x-[0px] h-md:break_md_translate_carte"
                            : path === "profile"
                            ? "translate-x-[130px] h-md:break_md_translate_profile"
                            : ""
                        }`}
                    ></div>
                <NavLink to="/carte" className={`${path === "carte" && "dock-active text-white"}  rounded-full p-4 `} onClick={() => setPath("carte")}>
                    <i className="text-3xl h-md:break_md_power3"><FaMapLocationDot></FaMapLocationDot></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "home" && "dock-active text-white"} rounded-full p-4`} onClick={() => setPath("home")}>
                    <i className="text-3xl h-md:break_md_power3"><RiHome3Line></RiHome3Line></i>
                </NavLink>
                
                <NavLink to="/" className={`${path === "profile" && "dock-active text-white "} rounded-full p-4`} onClick={() => setPath("profile")}>
                    <i className="text-3xl h-md:break_md_power3"><FaRegUserCircle></FaRegUserCircle></i>
                </NavLink>
           </div>
        </div>
    );
}

export default Sidebar;
