import { NavLink } from "react-router-dom";
import fond from "../../assets/svg/auth.svg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const Login = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-end items-end ">
            {/* Image de fond floue et sombre */}
            <img 
                src={fond} 
                alt="fond" 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-80 opacity-80" 
            />

            {/* Contenu par-dessus */}
            <div className=" text-2xl z-10 opacity-80 flex flex-col items-end justify-end gap-4 bg-gradient-to-b from-transparent via-black dark:via-black/40 to-black  w-full h-screen backdrop-blur-[3px]">
                <div className="flex flex-col gap-2 h-[50vh] w-full p-4">
                    <div><span className="font-extrabold text-4xl">Login</span></div>
                    <form className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <div><input className="input validator w-full" type="email" required placeholder="Email" /></div>
                            <div><input className="input validator w-full" type="password" required placeholder="Mot de passe" /></div>
                            <div><button type="submit" className="w-full bg-second_mc p-4 text-[14px] cursor-pointer">Login</button></div>
                        </div>
                        <div className="text-center flex flex-col gap-2">
                            <div><span className="text-[12px]">- Or sign with -</span></div>
                            <div className="flex flex-row w-full justify-center items-center gap-2">
                                <div><i><FcGoogle></FcGoogle></i></div>
                                <div><i className="text-[#0187dd]"><FaFacebook></FaFacebook></i></div>
                                <div><i><FaApple></FaApple></i></div>
                            </div>
                        </div>
                        <div className="text-center text-[12px]">
                            <div><span>Don't have you account?</span></div>
                            <div><NavLink to="" className="cursor-pointer underline"><span>Register now</span></NavLink></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;