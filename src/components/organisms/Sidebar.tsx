import { useState } from "react";
import NavlinkIcons from "../molecules/NavlinkIcons";

const Sidebar = () => {

    const [path, setPath] = useState('home')

    return (
        <div className="fixed w-full flex flex-row items-center justify-center bottom-5 z-9999">
           <div  className="flex flex-row justify-center items-center gap-1 p-1 dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-full ">
                <div
                    className={`absolute top-2 h-md:break_md_sid left-2 w-14 h-14 rounded-full transition-all duration-500 bg-second_mc -z-1 ${ 
                        path === "home"
                            ? "translate-x-[65px] h-md:break_md_translate_home"
                            : path === "history"
                            ? "translate-x-[0px] h-md:break_md_translate_carte"
                            : path === "profile"
                            ? "translate-x-[130px] h-md:break_md_translate_profile"
                            : ""
                        }`}
                ></div>
                <NavlinkIcons to="/home/history" path="history" onClick={() => setPath("history")}></NavlinkIcons>
                <NavlinkIcons to="/home" path="home" onClick={() => setPath("home")}></NavlinkIcons>
                <NavlinkIcons to="/home/profil" path="profile" onClick={() => setPath("profile")}></NavlinkIcons>

           </div>
        </div>
    );
}

export default Sidebar;
 