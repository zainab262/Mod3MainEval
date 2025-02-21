import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom'
import AuthContextProvider from '../context/AuthContextProvider'

export default function PrivateRoute() {
  let {isAuthenticated}=useContext(AuthContext)
  
  return (
    <div>
      {isAuthenticated?<Navigate to="/quiz"></Navigate>:<Navigate to="/login"></Navigate>}
    </div>
  )
}
