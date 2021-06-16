import React from "react"
import LoanCalc from "./components/loanCalc"
import RandomTips from "./components/randomTips"
import Switch from "@material-ui/core/Switch"
import { ToggleContext } from "./context"

export default function App() {
  const [state, setState] = React.useState(true)

  const handleChange = () => {
    setState(!state)
  }
  return (
    <ToggleContext.Provider value={{ toggle: state }}>
      <div className="container">
        <video loop autoPlay muted id="video">
          <source src="https://qu.ax/4KB.mp4" type="video/mp4" />
        </video>
        <div
          className="grid-container"
          style={
            state
              ? { backgroundColor: "#f2eeee" }
              : { backgroundColor: "#C0C5D3" }
          }
        >
          <div className="header-container">
            <h1 className="title">The Loan Calculator</h1>
            <div className="switch">
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                color="secondary"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
          </div>
          <div className="inner-container">
            <div className="calc-item">
              <LoanCalc />
            </div>
            <div className="line-2"></div>
            <div className="tips-item">
              <RandomTips />
            </div>
          </div>
        </div>
      </div>
    </ToggleContext.Provider>
  )
}
