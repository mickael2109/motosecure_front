import fond from "../../assets/fond/fond.svg"

const Auth = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-4">
            {/* Image de fond floue et sombre */}
            <img 
                src={fond} 
                alt="fond" 
                className="absolute top-0 left-0 w-full h-full object-cover blur-[2px] -z-10" 
            />

            {/* Contenu par-dessus */}
            <span className=" text-4xl font-bold z-10 opacity-80 text-white_mc">MotoSecure MG</span>
        </div>

    );
};

export default Auth;