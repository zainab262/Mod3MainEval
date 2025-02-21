import React, { useEffect, useState } from 'react'
import "../styles/quiz.css"
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function Quiz() {
    let [quiz,setQuiz]=useState([])
    let [option,setoptions]=useState([])
    let [showAns,setShowans]=useState(false)
    let [selectedAns,setSelectedAns]=useState("")
    useEffect(()=>{
        try{
            axios.get("https://simple-half-dew.glitch.me/api/questions")
            // .then((res)=>{console.log(res.data.questions)})
            // .then((res)=>{console.log(res.data.questions)})
            .then((res)=>{setQuiz(res.data.questions)}) 

        }catch(err){
            console.log(err)
        }

    },[])
    let handleShow=()=>{
        setShowans(!showAns)
        
    }
    

  return (
    <div>
        
        <h2 className='heading'>Take the Quiz</h2>
        {
            quiz.map((ele)=>{
                return(
                    <>
                        <div className='quiz-card'>
                            <h2>{ele.id}{"."} {ele.question}</h2>
                            <div>{ele.options.map((opt)=>{
                                return(
                                    <div className='options'>
                                    <div className='opt'> 
                                        <input className="input" type='radio' value={opt} />
                                        <label className="input">{opt}</label>
                                    </div> 
                                    </div>
                                )

                            })}</div>
                            <button className='show-btn' onClick={handleShow}>{showAns?"Hide Answer":"Show Answer"}</button>
                            {showAns && <p className='showans'>Correct Answer : {ele.answer}</p>}
                        </div>
                </>    

                )
            })
        }

    </div>
  )
}
