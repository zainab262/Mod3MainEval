import React, { useContext, useEffect, useState } from 'react'
import"../styles/login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContextProvider'
import AuthContextProvider from '../context/AuthContextProvider'
import Navbar from '../components/Navbar'
export default function Login() {
    let [username,setUsername]=useState()
    let [password,setPassword]=useState()
    let navigate=useNavigate()
    let {login}=useContext(AuthContext)
    let handleSubmit=async(e)=>{
        e.preventDefault()
       try{
        let res= await axios.post("https://simple-half-dew.glitch.me/login",{
            username,password
        })
        if(res.data.success){
            console.log(res.data.token)
            navigate("/quiz")
            let {token}=res.data
            login(token)
        }
            
        
       }catch(err){
        alert(err.response.data.message)
        console.log(err.response.data.message)
        
        // console.log(err)
       }
    }
    
  return (
    <>
    
    <form className='login-form' onSubmit={handleSubmit}>

      <h1>Login Form</h1>
      <input type='text' 
        name='username' 
        placeholder='Enter your Name'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        >

     </input>
      <input type='password' 
        name='password'
        placeholder='Enter your Password' 
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}

        >

    </input>
      <input className='login-btn' type="submit"  value={"Login"} />

    </form>
  </>  
  )
}
