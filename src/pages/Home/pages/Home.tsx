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
import { IoSpeedometer } from "react-icons/io5";

const Home = () => {    

    const [isOn, setIsOn] = useState(false);
    const [dotHome, setDotHome] = useState("moto");

    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 bg-gradient-to-b from-transparent to-second_mc/30">

            <div className=" z-10 relative flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center gap-2">
                            <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2 opacity-60">
                            <div className="bg-[#fff] dark:bg-[#232628] p-4 rounded-full"><i className="text-2xl"><IoMdNotifications /></i></div>
                            <div className="bg-[#fff] dark:bg-[#232628] p-4 rounded-full">
                                <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" />

                                {/* sun icon */}
                                <svg
                                    className="swap-on h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off h-7 w-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                                </label>
                            </div>
                        </div>
                    </div>

                   <div className="flex flex-col items-center justify-center gap-8">
                        <div>
                            <div><span className="text-4xl font-bold opacity-70">Hi, Mickael</span></div>
                        </div>

                        <div
                            onClick={() => setIsOn(!isOn)}
                            className={`relative flex flex-row items-center justify-center gap-2 p-2 rounded-full transition-all duration-900 ${isOn ? "bg-gradient-to-r": "bg-gradient-to-l"} from-transparent to-second_mc/80 dark:to-second_mc/40 border border-second_mc/10 w-[180px] h-[68px] cursor-pointer`}
                        >
                            {/* Moving background indicator */}
                            <div
                                className={`absolute top-1 left-2 w-14 h-14 rounded-full transition-all duration-500 bg-second_mc dark:bg-second_mc/60 z-0 ${
                                isOn ? "translate-x-[107px]" : "translate-x-0"
                                }`}
                            ></div>

                            {/* Icon PowerOff */}
                            <div className="relative z-10 rounded-full p-2">
                                <i className={`text-3xl ${isOn? "text-black/60 dark:text-white/60": "text-white/60"}`}>
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
                                <i className={`text-3xl ${!isOn? "text-black/60 dark:text-white/60": "text-white/60"}`}>
                                <MdPower />
                                </i>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="border-8 border-second_mc/80 dark:border-second_mc/50 p-2 rounded-full">
                                {
                                    dotHome === "moto" ? (
                                        <div className="border border-[#232628] bg-[#232628] p-5 rounded-full w-80 h-80 flex flex-col items-center justify-center relative">
                                            <img 
                                                src={fond} 
                                                alt="fond" 
                                                className="z-10 object-contain" 
                                            />    
                                        </div>
                                    ):(
                                        <div className="w-80 h-80"><Map page="home"></Map></div>
                                    )
                                }
                                
                                
                            </div>

                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className={`w-5 h-5 rounded-full cursor-pointer ${dotHome === "moto" ? "bg-second_mc border border-second_mc" : "border opacity-50"}`} onClick={() => setDotHome('moto')}></span>
                                <span className={`w-5 h-5 rounded-full cursor-pointer ${dotHome === "carte" ? "bg-second_mc border border-second_mc" : "border opacity-50"}`} onClick={() => setDotHome('carte')}></span>
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


