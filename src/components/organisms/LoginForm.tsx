import React, { useEffect, useState } from 'react'
import InputField from '../molecules/InputField'
import Button from '../atoms/Button'
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useAppDispatch } from '../../app/store';
import { login } from '../../features/user/thunk';
import type { loginInterface } from '../../types/UserInterface';
import Cookies from "js-cookie";

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const token = Cookies.get("___motosecure");
        if (token) {
            navigate("/home", { replace: true });
        }
    }, [navigate]);

    const [loginData, setLoginData] = useState<loginInterface>({
        email: "",
        password: "",
    });
    const [error, setError] = useState('')


    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()

        try {
            const result = await dispatch(login(loginData));
            const { message, success, token } = result.payload
            
            if (!success) {
                setError(message)
            } else {
                Cookies.set("___motosecure", token, { secure: false, sameSite: "Strict" });
                navigate("/home");
            }
        } catch (error) {
            console.log("erreur du connexion : ", error);
            setError("Erreur du connexion!")
        }

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <InputField label="Email" name="email"  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} value={loginData.email}/>
                <InputField
                    label="Mot de passe"
                    name="password"
                    type="password"
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    value={loginData.password}
                />
                <Button type="submit">Se connecter</Button>
                {
                    <div className='text-center text-[12px]'><span className='text-red-500'>{error}</span></div>
                }
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
                <div><NavLink to="/register" className="cursor-pointer underline"><span>Register now</span></NavLink></div>
            </div>

        </form>
  )
}

export default LoginForm
