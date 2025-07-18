import fond from "../../assets/fond/fond.svg"
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const Auth = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-4">
            {/* Image de fond floue et sombre */}
            <img 
                src={fond} 
                alt="fond" 
                className="absolute top-0 left-0 w-full h-full object-cover brightness-60 -z-10" 
            />

            {/* Contenu par-dessus */}
            <div className=" text-2xl f z-10 opacity-80 flex flex-col items-center gap-4">
                <i className="text-6xl text-[#6cf7d8] "><GiFullMotorcycleHelmet /></i>
                <span className="font-extrabold">MotoSecure MG</span>
            </div>
        </div>

    );
};

export default Auth;