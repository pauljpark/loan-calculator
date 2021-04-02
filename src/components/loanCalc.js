import "../App.css"
import { useState } from "react"
import { preventChars } from "../PreventChars"
import MonthlyPay from "./monthlyPay"

export default function LoanCalc() {
  const [principal, setPrincipal] = useState("")
  const [loanYears, setLoanYears] = useState("")
  const [loanMonths, setLoanMonths] = useState("")
  const [yearlyInt, setYearlyInt] = useState("")

  const [monthlyPay, setMonthlyPay] = useState("")

  const onChangePrincipal = (e) => {
    setPrincipal(e.target.value)
    console.log(e.target.value)
  }

  const onChangeLoanYears = (e) => {
    setLoanYears(e.target.value)
    setLoanMonths(e.target.value * 12)
    console.log(e.target.value)
  }

  const onChangeLoanMonths = (e) => {
    setLoanMonths(e.target.value)
    setLoanYears(e.target.value / 12)
    console.log(e.target.value)
  }

  const onChangeYearlyInt = (e) => {
    setYearlyInt(e.target.value)
    console.log(e.target.value)
  }

  const onCalculate = (e) => {
    e.preventDefault()
    const monthlyInt = Number(yearlyInt / 12 / 100)
    const calculations =
      (monthlyInt * (1 + monthlyInt) ** Number(loanMonths)) /
      ((1 + monthlyInt) ** Number(loanMonths) - 1)
    setMonthlyPay(Number(principal * calculations))
  }

  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={onCalculate}>
        Loan amount:
        <input
          type="number"
          onKeyDown={preventChars}
          onChange={onChangePrincipal}
          value={principal}
        />
        <br />
        Loan term in years:
        <input
          type="number"
          onKeyDown={preventChars}
          onChange={onChangeLoanYears}
          value={loanYears}
        />
        <br />
        OR Loan term in months
        <input
          type="number"
          onKeyDown={preventChars}
          onChange={onChangeLoanMonths}
          value={loanMonths}
        />
        <br />
        Interest rate per year:
        <input
          type="number"
          onKeyDown={preventChars}
          onChange={onChangeYearlyInt}
          value={yearlyInt}
        />
        <br />
        <button type="submit">Submit!</button>
      </form>
      <MonthlyPay totalMonthPay={monthlyPay} />
    </div>
  )
}
