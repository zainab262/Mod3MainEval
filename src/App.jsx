import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Result from "./Pages/Result"
import Quiz from "./Pages/Quiz"
import Login from "./Pages/Login"
import PrivateRoute from './Pages/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      
      <Routes>
        <Route path='/' element={
          <Home/>
          }></Route>
        {/* <Route path='/quiz' element={<PrivateRoute><Quiz/></PrivateRoute>}></Route> */}
        <Route path='/quiz' element={<Quiz/>}></Route>

        <Route path='/result' element={<Result/>}></Route>
        <Route path='/login' element={<Login/>}></Route>



      </Routes>
    </>
  )
}

export default App
