import React from "react"
import LoanCalc from "./components/loanCalc"
import RandomTips from "./components/randomTips"

export default function App() {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="title-container">
          <h2>The Loan Calculator</h2>
        </div>
        <div className="inner-container">
          <div className="calc-item">
            <LoanCalc />
          </div>
          <div className="tips-item">
            <RandomTips />
          </div>
        </div>
      </div>
    </div>
  )
}
