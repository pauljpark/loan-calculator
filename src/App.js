import React from "react"
import LoanCalc from "./components/loanCalc"
import RandomTips from "./components/randomTips"

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <LoanCalc />
      <RandomTips />
    </div>
  )
}
