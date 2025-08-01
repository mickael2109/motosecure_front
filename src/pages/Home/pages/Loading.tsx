import fond from "../../../assets/fond/page4.svg"
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const Loading = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-4">
            {/* Image de fond floue et sombre */}
            <img 
                src={fond} 
                alt="fond" 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10" 
            />

            {/* Contenu par-dessus */}
            <div className=" text-2xl z-10 opacity-80 flex flex-col items-center gap-4">
                <i className="text-6xl text-second_mc "><GiFullMotorcycleHelmet /></i>
                <span className="font-extrabold">MotoSecure MG</span>
            </div>
        </div>

    );
};

export default Loading;