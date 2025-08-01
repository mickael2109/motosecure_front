import React from 'react'
import AuthLayout from '../components/templates/AuthLayout'
import RegisterForm from '../components/organisms/RegisterForm'

const RegisterPage: React.FC = () => {


  return (
    <AuthLayout title="Inscription">
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
