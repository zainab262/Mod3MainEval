import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/nav.css"
import { AuthContext } from '../context/AuthContextProvider'


export default function Navbar() {
  let {isAuthenticated,logout}=useContext(AuthContext)
  let navigate=useNavigate()
  let navLogin=()=>{
    navigate("/login")
  }
  return (

    <nav className='navbar'>
      <div className='nav-links'>
        {/* <h2>Quiz App</h2> */}
        <Link className='nav-link' to="/" >Home</Link>
        <Link  className='nav-link'  to="/quiz">Quiz</Link>
        <Link  className='nav-link'  to="/result">Result</Link>
      </div>  
        <div className='log-btn'>
        {isAuthenticated?<button className='log-btn' onClick={logout}>Logout</button>:<button className='log-btn' onClick={navLogin}>Login</button>}
        
        </div>
      
    </nav>
  )
}
