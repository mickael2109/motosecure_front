
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../../features/user/selectors'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
   const user = useSelector(getUser);

  if (!user) return <Navigate to="/" replace />
  return <>{children}</>
}

export default ProtectedRoute
