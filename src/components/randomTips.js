import React from "react"
import { tips } from "../api/tips"
import { useState } from "react"
import Button from "@material-ui/core/Button"
import { ToggleContext } from "../context"

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
    <ToggleContext.Consumer>
      {(context) => {
        return (
          <div className="tips">
            <h2>{tips[randomNum]}</h2>
            <Button
              onClick={randomInt}
              color={context.toggle ? "primary" : "red"}
              variant="contained"
            >
              →
            </Button>
          </div>
        )
      }}
    </ToggleContext.Consumer>
  )
}
