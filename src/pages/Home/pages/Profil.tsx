import { useSelector } from "react-redux";
import fondFond from "../../../assets/png/moto3.jpg"
import profile from "../../../assets/profil.jpeg"
import { getUser } from "../../../features/user/selectors";


const Profil = () => {

    const user = useSelector(getUser);

    return (
        <div className="relative min-h-screen bg-cover bg-center p-6 dark:bg-gradient-to-b from-transparent to-second_mc/30 ">
            <img 
                src={fondFond} 
                alt="fond" 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-80 blur-[8px] opacity-30" 
            />
           <div className="bg-gradient-to-b from-white/50 dark:from-primary_mc/90  to-second_mc/90 dark:bg-white/50 z-1 h-[70vh] rounded-t-4xl  fixed bottom-0 left-0 w-screen">
                <div className="relative -top-20 flex flex-row items-center justify-center">
                    <img 
                        src={profile} 
                        alt="fond" 
                        className="w-40 h-40 object-cover rounded-full border-5 border-primary_mc/20 dark:border-white/50" 
                    />
                </div>
                <div className=" relative -top-10 p-5 flex flex-col items-center gap-4 opacity-80">
                    <div className="w-full">
                        <div><span className="text-[14px]">Pseudo</span></div>
                        <div><input type="text" className="input w-full bg-primary_mc/20 border-0" value={user?.pseudo} placeholder="Ajouter votre pseudo" /></div>
                    </div>
                    <div className="w-full">
                        <div><span className="text-[14px]">Nom</span></div>
                        <div><input type="text" className="input w-full bg-primary_mc/20 border-0" value={user?.name} placeholder="Ajouter votre nom" /></div>
                    </div>
                    <div className="w-full">
                        <div><span className="text-[14px]">Email</span></div>
                        <div><input type="text" className="input w-full bg-primary_mc/20 border-0" value={user?.email} placeholder="Ajouter votre email" /></div>
                    </div>
                    <div className="w-full">
                        <div><span className="text-[14px]">Téléphone</span></div>
                        <div><input type="text" className="input w-full bg-primary_mc/20 border-0" value={user?.phone} placeholder="Ajouter votre numéro" /></div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Profil;
