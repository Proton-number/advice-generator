import React, { useEffect, useState } from "react"
import Dice from "/src/images/icon-dice.svg"
import mobileDivider from "/src/images/pattern-divider-mobile.svg"
import desktopDivider from "/src/images/pattern-divider-desktop.svg"
import "./Advice.css"
import axios, { Axios } from "axios"

function Advice() {
  const [advices, setAdvice] = useState("")

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res)
        setAdvice(res.data.advice)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const adviceHandler = () => {}

  return (
    <div className="container">
      <div className="words">
        <h4>Advice #177</h4>

        <p> {advices} </p>
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
    </div>
  )
}

export default Advice
