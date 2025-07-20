import fond from "../../../assets/fond/moto.svg"
import { TbHandStop } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

const Home = () => {    


    return (
        <div className="relative min-h-screen bg-cover bg-center p-6">
            {/* Image de fond floue et sombre */}
            <div className="">
                <img 
                    src={fond} 
                    alt="fond" 
                    className=" object-cover opacity-40 absolute top-0 left-0 w-full h-full -z-10" 
                />
                <div className="flex flex-col h-screen justify-center items-center absolute top-0 left-0 w-full z-10">
                    <span className="w-40 h-40 rounded-full bg-white opacity-20 blur-3xl shadow-2xl"></span>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center z-10 relative">
                <div className="flex flex-row justify-start items-center gap-2">
                    <div ><img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className="w-15 h-15 rounded-full border border-second_mc"/></div>
                    <div className="opacity-60">
                        <div className="flex flex-row justify-start items-center gap-1 text-[14px]"><span>Mickael</span><i><TbHandStop /></i></div>
                        <div><span className="text-[12px]">Sabotsy Namehana, Antananarivo</span></div>
                    </div>
                </div>
                <div className="opacity-60"><i><IoMdNotifications /></i></div>
            </div>

        </div>
    );
};

export default Home;

