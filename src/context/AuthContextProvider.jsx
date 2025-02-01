import React, { createContext, useState } from 'react'
export  let AuthContext=createContext()
export default function AuthContextProvider({children}) {
    



    let [username,setUsername]=useState()
    let [password,setPassword]=useState()
    let [token,setToken]=useState(false)
    let handleSubmit=async(e)=>{
        e.preventDefault()
       try{
        let res= await axios.post("https://simple-half-dew.glitch.me/login",{
            username,password
        })
        if(res.data.success){
            console.log(res.data.token)
            let {token}=res.data
            // login(token)
            setToken(true)
        }
            
        
       }catch(err){
        console.log(err.res.data.message)
        // console.log(err)
       }
    }
  return (
    <div>
      <AuthContextProvider.Provider value={token}>{children}</AuthContextProvider.Provider>
    </div>
  )
}
