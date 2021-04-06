import React from "react"
import { tips } from "../api/tips"
import { useState } from "react"
import Button from "@material-ui/core/Button"

export default function RandomTips() {
  const [randomNum, setRandomNum] = useState(0)

  const randomInt = () => {
    if (randomNum === 5) {
      setRandomNum(0)
    } else {
      setRandomNum(randomNum + 1)
    }
  }

  return (
    <div className="tips">
      <h2>{tips[randomNum]}</h2>
      <Button onClick={randomInt} color="primary" variant="contained">
        →
      </Button>
    </div>
  )
}
