import Map from "../../../components/Map";
import { LuMapPin } from "react-icons/lu";
import { MdGpsFixed } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { FaCompass } from "react-icons/fa";

const Carte = () => {

    return (
      <div>
        <div className="w-full h-screen fixed "><Map page="page_map"></Map></div>

        {/* lumiere map */}
        <div className="blur-3xl dark:bg-second_mc/50 backdrop-blur-m w-[30%] absolute top-1/2 -translate-y-1/2 h-[10vh] left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-xl text-white">
        
        </div>

        {/* info */}
        <div className="border border-second_mc/10 dark:bg-second_mc/5 bg-black/50 backdrop-blur-m w-[80%] absolute bottom-25 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-xl text-white">
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
        </div>
      </div>
    )
}

export default Carte;