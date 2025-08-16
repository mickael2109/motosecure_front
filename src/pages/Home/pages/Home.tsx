// import fond from "../../../assets/fond/moto_no_bg.svg"
import fond from "../../../assets/png/moto2.png"
// import fondFond from "../../../assets/png/moto2.jpg"
// import { TbHandStop } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
// import { LuMapPin } from "react-icons/lu";
import 'leaflet/dist/leaflet.css';
import Map from "../../../components/Map";
import { MdGpsFixed, MdPowerOff } from "react-icons/md";
import { MdPower } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaCompass } from "react-icons/fa";
import { IoMoonOutline, IoSpeedometer } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { useSelector } from "react-redux";
import { getUser } from "../../../features/user/selectors";
import Cookies from "js-cookie";
import { useAppDispatch } from "../../../app/store";
import { NavLink, useNavigate } from "react-router-dom";
import { resetApp } from "../../../app/resetAction";
import { selectAllMotoUser } from "../../../features/moto/selectors";
import type { OnOffMotoInterface } from "../../../types/MotoInterface";
import { onOffMotoThunk } from "../../../features/moto/thunk";
import io from 'socket.io-client';

const socket = io('https://mc-back.onrender.com', {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

const Home = () => {    

     const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const user = useSelector(getUser);
    const moto = useSelector(selectAllMotoUser);
    // console.log("moto : ",moto);
    

    const [isOn, setIsOn] = useState(moto[0].status);
    const [dotHome, setDotHome] = useState("carte");
    
    

    useEffect(() => {
        socket.on('statusmoto', (socketValue) => {
        setIsOn(socketValue.status)
          });
    
        return () => {
            socket.off('statusmoto');
        };
    }, []);

    // console.log("token : ",token);
    // console.log("user : ",user);
    // console.log("moto : ",moto);
    // console.log("coordinateToday: ",coordinateToday);
    
    
    
    const handleLogout = async () => {
        Cookies.remove("___motosecure");

        dispatch(resetApp()); // Reset Redux state
        navigate("/");
    };


    const actionButton = async (e: React.FormEvent) => {
        e.preventDefault();

        const data : OnOffMotoInterface = ({
            id: 1,
            status: isOn
        })
        
        try {
            await dispatch(onOffMotoThunk(data))

        } catch (err) {
            console.error("Erreur lors d'éteindre ou allumer le moteur :", err);
            // SweetAlert.errorPage("Une erreur est survenue");
        } 
    };


    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 dark:bg-gradient-to-b from-transparent to-second_mc/30 ">
             {/* <img 
                src={fondFond} 
                alt="fond" 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-80 blur-[8px] opacity-80 dark:opacity-80" 
            /> */}
            <div className=" z-10 relative flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col gap-6 h-md:break_md_gap1 ">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center gap-2">
                            <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2 opacity-60">
                            <div className="bg-[#fff] dark:bg-[#232628] p-4 rounded-full h-lg:break_lg_icon" onClick={handleLogout}><i className="text-2xl"><IoMdNotifications /></i></div>
                            <NavLink to="/home/notification"  className="bg-[#fff] dark:bg-[#232628] p-4 rounded-full h-lg:break_lg_icon" >
                                <label className="swap swap-rotate">
                                 {/* this hidden checkbox controls the state */}
                                <input type="checkbox" />

                                {/* sun icon */}
                                <i className="swap-on text-2xl"><LuSunDim></LuSunDim></i>

                                {/* moon icon */}
                                <i className="swap-off text-2xl"><IoMoonOutline></IoMoonOutline></i>
                                
                              
                                </label>
                            </NavLink>
                        </div>
                    </div>

                   <div className="flex flex-col items-center justify-center gap-8 h-md:break_md_gap2">
                        <div>
                            <div><span className="text-4xl h-lg:break_lg_txthome font-bold opacity-70">Hi, {user?.pseudo || user?.email}</span></div>
                        </div>

                        <form
                            onSubmit={actionButton}
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
                            <button type="submit" className="relative z-10 rounded-full p-2">
                                <i className={`text-3xl h-md:break_md_power3 ${isOn? "text-black/60 dark:text-white/60": "text-white/60"}`}>
                                <MdPowerOff />
                                </i>
                            </button>

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
                            <button type="submit" className="relative z-10 rounded-full p-2">
                                <i className={`text-3xl h-md:break_md_power3 ${!isOn? "text-black/60 dark:text-white/60": "text-white/60"}`}>
                                <MdPower />
                                </i>
                            </button>
                        </form>

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
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><MdGpsFixed /></i><span>Long: {moto[0].long || 0} / Lat: {moto[0].lat || 0}</span></div>
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><IoSpeedometer /></i><span>{moto[0].lastSpeed || 0} Km/H</span></div>
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><FaCompass /></i>Moteur {moto[0].status === false ? "coupé": "allumé"}</div>
                            <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><FaCompass /></i>Vibration {moto[0].isVibration === true ? "activé": "desactivé"}</div>
                        </div>
                   </div>
                </div>

               
            </div>

        </div>
    );
};

export default Home;


