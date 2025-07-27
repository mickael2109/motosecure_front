// import fond from "../../../assets/fond/moto_no_bg.svg"
import fond from "../../../assets/png/moto2.png"
// import { TbHandStop } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
// import { LuMapPin } from "react-icons/lu";
import 'leaflet/dist/leaflet.css';
// import Map from "../../../components/Map";
import { IoMdPower } from "react-icons/io";

const Home = () => {    


    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 ">
            {/* Image de fond floue et sombre */}
            {/* <div className="">
                <img 
                    src={fond} 
                    alt="fond" 
                    className=" object-cover absolute top-0 left-0 w-80 h-80 -z-10 brightness-50" 
                />
                <div className="flex flex-col h-screen justify-center items-center absolute top-0 left-0 w-full z-10">
                    <span className="w-40 h-40 rounded-full dark:bg-white bg-second_mc opacity-60 blur-3xl shadow-2xl"></span>
                </div>
            </div> */}

            <div className=" z-10 relative flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center gap-2">
                            <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2 opacity-60">
                            <div className=""><i className="text-2xl"><IoMdNotifications /></i></div>
                            <div>
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

                   <div className="flex flex-col items-center justify-center gap-6">
                        <div>
                            <div><span className="text-4xl font-bold opacity-70">Hi, Mickael</span></div>
                        </div>

                        <div>
                            <div className="border-8 border-second_mc/50 p-2 rounded-full">
                                <div className="border border-[#232628] bg-[#232628] p-5 rounded-full w-80 h-80 flex flex-col items-center justify-center relative">
                                    <img 
                                        src={fond} 
                                        alt="fond" 
                                        className="z-10 object-contain" 
                                    />
                                </div>
                                {/* <div className="flex flex-col h-screen justify-center items-center absolute top-0 left-0 w-full z-10">
                                    <span className="w-40 h-40 rounded-full dark:bg-white bg-second_mc opacity-60 blur-3xl shadow-2xl"></span>
                                </div> */}
                            </div>

                            <div className="flex flex-row items-center justify-center">
                               <div className="w-25 flex flex-row items-end py-4 rounded-b-full justify-center h-[15vh] bg-gradient-to-b from-trasparent to-second_mc/40">
                                    <i className="text-2xl cursor-pointer opacity-80 font-bold bg-white/80 p-4 rounded-full text-red-600"><IoMdPower /></i>
                                </div>

                            </div>
                        </div>
                   </div>


                    {/* <div className="flex flex-col items-center justify-center gap-4 opacity-60">
                        <div className="text-center">
                            <div><span className="text-2xl font-bold">31 Km</span></div>
                            <div><span className="text-[12px] capitalize">kilométrage journalière</span></div>
                        </div>
                       <div className="flex flex-row items-center justify-center gap-2 dark:bg-white/30 bg-black/30 backdrop-blur-md p-1 text-black rounded-full">
                            <div className="bg-base-300 p-4 rounded-full"><i className="text-red-600"><IoMdPower></IoMdPower></i></div>
                            <div className="pr-2"><span className="text-[12px]">Couper le moteur</span></div>
                        </div>
                    </div> */}
                </div>

                {/* <div className="w-full absolute bottom-15 left-1/2 transform -translate-x-1/2 flex flex-row justify-between items-center gap-4">
                    <div className="w-45 h-45 dark:bg-white/10 p-4 rounded-4xl bg-black/10 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                        <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                        <div className="flex flex-col items-center justify-center gap-1 text-center">
                            <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span>Mickael</span><i><TbHandStop /></i></div>
                            <div className="flex flex-row justify-start items-center text-[14px]"><span className="text-[12px]">Sabotsy Namehana, Antananarivo</span><i><LuMapPin></LuMapPin></i></div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center w-45 h-45 justify-center rounded-4xl p-4 dark:bg-white/10 bg-black/10 backdrop-blur-sm">
                        <div className="w-40 h-40"><Map></Map></div>
                    </div>
                </div> */}

                {/* <div className="border border-second_mc/10 dark:bg-second_mc/5 bg-black/50 backdrop-blur-m w-[80%] absolute bottom-25 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-xl text-white">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <div><span className="text-second_mc text-[16px] font-bold">megafi 150cc</span></div>
                            <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span>Sabotsy namehana, Antananarivo</span><i><LuMapPin></LuMapPin></i></div>
                        </div>
                        <div>
                            <span className="bg-second_mc/20 text-[12px] font-bold p-2 rounded-full">5km</span>
                        </div>
                    </div>
                    <div className="text-[14px] mt-6 font-semibold">
                        <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><MdGpsFixed /></i><span>Long: -13.39433232 / Lat: 15.3423323</span></div>
                        <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><IoSpeedometer /></i><span>15Km/H</span></div>
                        <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><FaCompass /></i>Nord</div>
                    </div>
                </div> */}
               
            </div>

        </div>
    );
};

export default Home;




/**
 * 
 * model 1
 * 
 */
// // import fond from "../../../assets/fond/moto_no_bg.svg"
// import fond from "../../../assets/png/moto2.png"
// import { TbHandStop } from "react-icons/tb";
// import { IoMdNotifications } from "react-icons/io";
// import { LuMapPin } from "react-icons/lu";
// import 'leaflet/dist/leaflet.css';
// import Map from "../../../components/Map";
// import { IoMdPower } from "react-icons/io";

// const Home = () => {    


//     return (
//         <div className="relative min-h-screen bg-cover bg-center p-6 ">
//             {/* Image de fond floue et sombre */}
//             <div className="">
//                 <img 
//                     src={fond} 
//                     alt="fond" 
//                     className=" object-cover absolute top-0 left-0 w-80 h-80 -z-10 brightness-50" 
//                 />
//                 <div className="flex flex-col h-screen justify-center items-center absolute top-0 left-0 w-full z-10">
//                     <span className="w-40 h-40 rounded-full dark:bg-white bg-second_mc opacity-60 blur-3xl shadow-2xl"></span>
//                 </div>
//             </div>

//             <div className=" z-10 relative flex flex-col justify-between h-[90vh]">
//                 <div className="flex flex-col gap-6">
//                     <div className="flex flex-row justify-between items-center">
//                         <div className="flex flex-row justify-start items-center gap-2">
//                             <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
//                         </div>
//                         <div className="flex flex-row justify-center items-center gap-2 opacity-60">
//                             <div className=""><i className="text-2xl"><IoMdNotifications /></i></div>
//                             <div>
//                                 <label className="swap swap-rotate">
//                                 {/* this hidden checkbox controls the state */}
//                                 <input type="checkbox" />

//                                 {/* sun icon */}
//                                 <svg
//                                     className="swap-on h-7 w-7 fill-current"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24">
//                                     <path
//                                     d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//                                 </svg>

//                                 {/* moon icon */}
//                                 <svg
//                                     className="swap-off h-7 w-7 fill-current"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24">
//                                     <path
//                                     d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                                 </svg>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="flex flex-col items-center justify-center gap-4 opacity-60">
//                         <div className="text-center">
//                             <div><span className="text-2xl font-bold">31 Km</span></div>
//                             <div><span className="text-[12px] capitalize">kilométrage journalière</span></div>
//                         </div>
//                        <div className="flex flex-row items-center justify-center gap-2 dark:bg-white/30 bg-black/30 backdrop-blur-md p-1 text-black rounded-full">
//                             <div className="bg-base-300 p-4 rounded-full"><i className="text-red-600"><IoMdPower></IoMdPower></i></div>
//                             <div className="pr-2"><span className="text-[12px]">Couper le moteur</span></div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full absolute bottom-15 left-1/2 transform -translate-x-1/2 flex flex-row justify-between items-center gap-4">
//                     <div className="w-45 h-45 dark:bg-white/10 p-4 rounded-4xl bg-black/10 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
//                         <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
//                         <div className="flex flex-col items-center justify-center gap-1 text-center">
//                             <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span>Mickael</span><i><TbHandStop /></i></div>
//                             <div className="flex flex-row justify-start items-center text-[14px]"><span className="text-[12px]">Sabotsy Namehana, Antananarivo</span><i><LuMapPin></LuMapPin></i></div>
//                         </div>
//                     </div>
//                     <div className="flex flex-row items-center w-45 h-45 justify-center rounded-4xl p-4 dark:bg-white/10 bg-black/10 backdrop-blur-sm">
//                         <div className="w-40 h-40"><Map></Map></div>
//                     </div>
//                 </div>

//                 {/* <div className="border border-second_mc/10 dark:bg-second_mc/5 bg-black/50 backdrop-blur-m w-[80%] absolute bottom-25 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-xl text-white">
//                     <div className="flex flex-row justify-between items-center">
//                         <div>
//                             <div><span className="text-second_mc text-[16px] font-bold">megafi 150cc</span></div>
//                             <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span>Sabotsy namehana, Antananarivo</span><i><LuMapPin></LuMapPin></i></div>
//                         </div>
//                         <div>
//                             <span className="bg-second_mc/20 text-[12px] font-bold p-2 rounded-full">5km</span>
//                         </div>
//                     </div>
//                     <div className="text-[14px] mt-6 font-semibold">
//                         <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><MdGpsFixed /></i><span>Long: -13.39433232 / Lat: 15.3423323</span></div>
//                         <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><IoSpeedometer /></i><span>15Km/H</span></div>
//                         <div className="flex flex-row justify-start items-center gap-1"><i className="text-second_mc"><FaCompass /></i>Nord</div>
//                     </div>
//                 </div> */}
               
//             </div>

//         </div>
//     );
// };

// export default Home;

