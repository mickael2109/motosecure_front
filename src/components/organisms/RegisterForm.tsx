import React, { useState } from 'react'
import InputField from '../molecules/InputField'
import Button from '../atoms/Button'
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registre avec :', { email, password })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <InputField label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField
                label="Mot de passe"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
                label="Confirmer le mot de passe"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Créer un compte</Button>
        </div>

        <div className="text-center flex flex-col gap-2">
            <div><span className="text-[12px]">- Or sign up with -</span></div>
            <div className="flex flex-row w-full justify-center items-center gap-2">
                <div><i><FcGoogle></FcGoogle></i></div>
                <div><i className="text-[#0187dd]"><FaFacebook></FaFacebook></i></div>
                <div><i><FaApple></FaApple></i></div>
            </div>
        </div>
        <div className="text-center text-[12px]">
            <div><span>Have you account?</span></div>
            <div><NavLink to="/" className="cursor-pointer underline"><span>Login now</span></NavLink></div>
        </div>

    </form>
  )
}

export default RegisterForm
