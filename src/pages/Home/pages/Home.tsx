import fond from "../../../assets/fond/moto_no_bg.svg"
import { TbHandStop } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import 'leaflet/dist/leaflet.css';
import Map from "../../../components/Map";

const Home = () => {    


    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 ">
            {/* Image de fond floue et sombre */}
            <div className="">
                <img 
                    src={fond} 
                    alt="fond" 
                    className=" object-cover absolute top-0 left-0 w-full h-full -z-10 opacity-50" 
                />
                <div className="flex flex-col h-screen justify-center items-center absolute top-0 left-0 w-full z-10">
                    <span className="w-40 h-40 rounded-full dark:bg-white bg-second_mc opacity-60 blur-3xl shadow-2xl"></span>
                </div>
            </div>

            <div className=" z-10 relative flex flex-col justify-between h-[90vh]">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                        <div className="opacity-60">
                            <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span>Mickael</span><i><TbHandStop /></i></div>
                            <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span className="text-[12px]">Sabotsy Namehana, Antananarivo</span><i><LuMapPin /></i></div>
                        </div>
                    </div>
                    <div className="opacity-60"><i><IoMdNotifications /></i></div>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <Map></Map>
                </div>
            </div>

        </div>
    );
};

export default Home;

