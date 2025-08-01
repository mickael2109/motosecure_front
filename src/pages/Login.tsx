import React from 'react'
import AuthLayout from '../components/templates/AuthLayout'
import LoginForm from '../components/organisms/LoginForm'

const LoginPage: React.FC = () => {
  return (
    <AuthLayout title='Login'>
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
