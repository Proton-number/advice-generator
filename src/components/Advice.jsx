import React, { useEffect, useState } from "react"
import Dice from "/src/images/icon-dice.svg"
import mobileDivider from "/src/images/pattern-divider-mobile.svg"
import desktopDivider from "/src/images/pattern-divider-desktop.svg"
import "./Advice.css"
import axios from "axios"
import {motion} from 'framer-motion'

function Advice() {
  const [advices, setAdvice] = useState("")
  const [advicefromButton, setAdvicefromButton] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res.data)
        setAdvice(res.data.slip)
      setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [advicefromButton])

  const adviceHandler = () => {
    setAdvicefromButton(advices)
  }
  
  if(isLoading){
    return<div class="spinner"></div>
  }

  return (
    <motion.div 
    initial={{x:-250}}
    animate={{x:0}}
    className="container">
      <div className="words">
        <h4>Advice #{advices.id} </h4>

        <p> {advices.advice}  </p>
      </div>

      <div className="mobile-divider">
        <img src={mobileDivider} />
      </div>

      <div className="desktop-divider">
        <img src={desktopDivider} />
      </div>

      <div className="dice">
        <button onClick={adviceHandler}>
          {" "}
          <img src={Dice} />{" "}
        </button>
      </div>
    </motion.div>
  )
}

export default Advice
