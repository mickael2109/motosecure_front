import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { RiHome3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {

    const [path, setPath] = useState('home')

    return (
        <div className="dock dock-xs bg-base-200 h-[8vh]">
            <NavLink to="/home/profil" className={`${path === "profil"? "dock-active ": ""}`} onClick={() => setPath("profil")}>
                <i className="text-[25px]"><FaRegUserCircle></FaRegUserCircle></i>
            </NavLink>
            
            <NavLink to="/home" className={`${path === "home"? "dock-active ": ""}`} onClick={() => setPath("home")}>
                <i className="text-[25px]"><RiHome3Line></RiHome3Line></i>
            </NavLink>
            
            <NavLink to="/" >
                <i className="text-[25px]"><IoIosLogOut></IoIosLogOut></i>
            </NavLink>
        </div>
    );
}

export default Sidebar;
