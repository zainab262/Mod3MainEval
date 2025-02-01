import React, { useEffect, useState } from 'react'
import "../styles/quiz.css"
import axios from 'axios'

export default function Quiz() {
    let [quiz,setQuiz]=useState([])
    let [option,setoptions]=useState([])
    // let [correctans,setCorrectans]=useState()
    useEffect(()=>{
        try{
            axios.get("https://simple-half-dew.glitch.me/api/questions")
            // .then((res)=>{console.log(res.data.questions)})
            .then((res)=>{setQuiz(res.data.questions)})
            // .then((res)=>console.log(res.data.questions))


            

        }catch(err){
            console.log(err)
        }

    },[])
    // let showAnswer=(id)=>{
    //     axios.get(`https://simple-half-dew.glitch.me/api/questions${id}`)
    //     .then((res)=>{setCorrectans(res.data.questions.answer)})
    //     // .then ((ans)=>{
    //     //     console.log(ans)
    //     // })

    // }


  return (
    <div>
        <h2>Take the Quiz</h2>
        {
            quiz.map((ele)=>{
                return(
                    <div className='quiz-card'>
                        <h2>{ele.question}</h2>
                        <div>{ele.options.map((opt)=>{
                            return(
                                <div className='options'>
                                <button type='radio' value={opt}>{opt}</button>
                                </div>
                            )

                        })}</div>
                        <button>Show Answer</button>
                        {/* <button onClick={showAnswer(ele.id)}>Show Correct Answer</button> */}
                        {/* {<p>{correctans}</p>} */}
                    </div>
                )
            })
        }

    </div>
  )
}
