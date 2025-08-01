import React from 'react'
import fond from "../../assets/svg/auth.svg"

type Props = {
  children: React.ReactNode
  title?: string
}

const AuthLayout: React.FC<Props> = ({ children, title = 'Connexion' }) => {
  return (
     <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-end items-end ">
        {/* Image de fond floue et sombre */}
        <img 
            src={fond} 
            alt="fond" 
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-80 opacity-20 dark:opacity-80" 
        />

        <div className=" text-2xl z-10 opacity-80 flex flex-col items-end justify-end gap-4 bg-gradient-to-b from-transparent  dark:via-black/40  to-second_mc dark:to-black  w-full h-screen">
            <div className="flex flex-col gap-2 h-[50vh] w-full p-4 ">
            <div><span className="font-extrabold text-4xl dark:text-white text-black">{title}</span></div>
            {children}
        </div>
        </div>
    </div>
  )
}

export default AuthLayout
