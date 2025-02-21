import React, { createContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export  const AuthContext=createContext()
export default function AuthContextProvider({children}) {
  let navigate=useNavigate()
  let [isAuthenticated,setAuth]=useState(false)
  let [token,setToken]=useState(null)
  let login =(authToken)=>{
    setAuth(true)
    setToken(authToken)
    // navigate("/quiz")
    
  }
  let logout=()=>{
    setAuth(false)
    setToken(null)
    navigate("/")
  }

    
  
  return (
    <div>
      <AuthContext.Provider value={{login,token,isAuthenticated,logout}}>{children}</AuthContext.Provider>
    </div>
  )
}
