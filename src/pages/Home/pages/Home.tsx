// import fond from "../../../assets/fond/moto_no_bg.svg"
import fond from "../../../assets/png/moto2.png"
// import { TbHandStop } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
// import { LuMapPin } from "react-icons/lu";
import 'leaflet/dist/leaflet.css';
import Map from "../../../components/Map";
import { MdGpsFixed, MdPowerOff } from "react-icons/md";
import { MdPower } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import { FaCompass } from "react-icons/fa";
import { IoMoonOutline, IoSpeedometer } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";

const Home = () => {    

    const [isOn, setIsOn] = useState(false);
    const [dotHome, setDotHome] = useState("moto");

    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 dark:bg-gradient-to-b from-transparent to-second_mc/30 ">

            <div className=" z-10 relative flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col gap-6 h-md:break_md_gap1 ">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center gap-2">
                            <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2 opacity-60">
                            <div className="bg-[#fff] dark:bg-[#232628] p-4 rounded-full h-lg:break_lg_icon"><i className="text-2xl"><IoMdNotifications /></i></div>
                            <div className="bg-[#fff] dark:bg-[#232628] p-4 rounded-full h-lg:break_lg_icon">
                                <label className="swap swap-rotate">
                                 {/* this hidden checkbox controls the state */}
                                <input type="checkbox" />

                                {/* sun icon */}
                                <i className="swap-on text-2xl"><LuSunDim></LuSunDim></i>

                                {/* moon icon */}
                                <i className="swap-off text-2xl"><IoMoonOutline></IoMoonOutline></i>
                                
                              
                                </label>
                            </div>
                        </div>
                    </div>

                   <div className="flex flex-col items-center justify-center gap-8 h-md:break_md_gap2">
                        <div>
                            <div><span className="text-4xl h-lg:break_lg_txthome font-bold opacity-70">Hi, Mickael</span></div>
                        </div>

                        <div
                            onClick={() => setIsOn(!isOn)}
                            className={`relative flex flex-row items-center justify-center gap-2 p-2 rounded-full transition-all duration-900 ${isOn ? "bg-gradient-to-r": "bg-gradient-to-l"} from-transparent to-second_mc/80 dark:to-second_mc/40 border border-second_mc/10 w-[180px] h-[68px] h-md:break_md_power1 cursor-pointer`}
                        >
                            {/* Moving background indicator */}
                            <div
                                className={`absolute top-1 left-2 w-14 h-14 h-md:break_md_power2 rounded-full transition-all duration-500 bg-second_mc dark:bg-second_mc/60 z-0 ${
                                isOn ? "translate-x-[107px] h-md:break_md_power4" : "translate-x-0"
                                }`}
                            ></div>

                            {/* Icon PowerOff */}
                            <div className="relative z-10 rounded-full p-2">
                                <i className={`text-3xl h-md:break_md_power3 ${isOn? "text-black/60 dark:text-white/60": "text-white/60"}`}>
                                <MdPowerOff />
                                </i>
                            </div>

                            {/* Chevrons */}
                            <div className="flex flex-row items-center justify-center gap-1 relative z-10 text-[12px]">
                                <i className={`${isOn ? "rotate-180 opacity-75": "rotate-0 opacity-25"} text-white`}>
                                <FaChevronRight />
                                </i>
                                <i className={`${isOn ? "rotate-180": "rotate-0"} opacity-50 text-white`}>
                                <FaChevronRight />
                                </i>
                                <i className={`${isOn ? "rotate-180 opacity-25": "rotate-0 opacity-75"} text-white`}>
                                <FaChevronRight />
                                </i>
                            </div>

                            {/* Icon PowerOn */}
                            <div className="relative z-10 rounded-full p-2">
                                <i className={`text-3xl h-md:break_md_power3 ${!isOn? "text-black/60 dark:text-white/60": "text-white/60"}`}>
                                <MdPower />
                                </i>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="border-8 border-second_mc/80 dark:border-second_mc/50 p-2 rounded-full">
                                {
                                    dotHome === "moto" ? (
                                        <div className="border border-[#232628] bg-[#232628] p-5 rounded-full w-80 h-80 h-lg:break_lg_bool h-md:break_md_bool flex flex-col items-center justify-center relative">
                                            <img 
                                                src={fond} 
                                                alt="fond" 
                                                className="z-10 object-contain" 
                                            />    
                                        </div>
                                    ):(
                                        <div className="w-80 h-80 h-lg:break_lg_bool h-md:break_md_bool"><Map page="home"></Map></div>
                                    )
                                }
                                
                                
                            </div>

                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className={`w-5 h-5 h-md:break_md_dot rounded-full cursor-pointer ${dotHome === "moto" ? "bg-second_mc border border-second_mc" : "border opacity-50"}`} onClick={() => setDotHome('moto')}></span>
                                <span className={`w-5 h-5 h-md:break_md_dot rounded-full cursor-pointer ${dotHome === "carte" ? "bg-second_mc border border-second_mc" : "border opacity-50"}`} onClick={() => setDotHome('carte')}></span>
                            </div>
                        </div>
                        <div className="border border-second_mc/10 dark:bg-second_mc/5 bg-black/10 backdrop-blur-m w-[80%] p-2 text-[12px] font-semibold rounded-xl dark:shadow-xl opacity-70">
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><MdGpsFixed /></i><span>Long: -13.39433232 / Lat: 15.3423323</span></div>
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><IoSpeedometer /></i><span>15Km/H</span></div>
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><FaCompass /></i>Nord</div>
                        </div>
                   </div>
                </div>

               
            </div>

        </div>
    );
};

export default Home;


