import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthContextProvider, { AuthContext } from '../context/AuthContextProvider'
import "../styles/home.css"
import Navbar from '../components/Navbar'

export default function Home() {
    // let {login}=useContext(AuthContextProvider)
  return (
    
    <div className='homePage'>
      
      <h2>Welcome to Quiz App</h2>
      <p>Test your Knowledge and challenge yourself . Please
         <Link to="/login" className='login-btn'> Login</Link> to get started</p>
        {/* {login?<Navigate to="/quiz"/>:<Navigate to="/login"/>} */}
    </div>
    
  )
}
