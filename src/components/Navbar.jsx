import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/nav.css"

export default function Navbar() {
  return (

    <nav className='navbar'>
        <h2>Quiz App</h2>
        <Link className='nav-link' to="/" >Home</Link>
        <Link  className='nav-link'  to="/quiz">Quiz</Link>
        <Link  className='nav-link'  to="/result">Result</Link>
      
    </nav>
  )
}
