import "../App.css"
import { useState } from "react"
import { preventChars } from "../PreventChars"
import MonthlyPay from "./monthlyPay"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import InputAdornment from "@material-ui/core/InputAdornment"

export default function LoanCalc() {
  const [principal, setPrincipal] = useState(5000)
  const [loanYears, setLoanYears] = useState(5)
  const [loanMonths, setLoanMonths] = useState(60)
  const [yearlyInt, setYearlyInt] = useState(4.5)

  const [monthlyPay, setMonthlyPay] = useState(93.22)

  const [totalPrinPaid, setTotalPrinPaid] = useState(5000)
  const [totalIntPaid, setTotalIntPaid] = useState("593.20")

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
    const answer = (
      (Number(principal) *
        (monthlyInt * (1 + monthlyInt) ** Number(loanMonths))) /
      ((1 + monthlyInt) ** Number(loanMonths) - 1)
    ).toFixed(2)
    setMonthlyPay(answer)
    setTotalPrinPaid(principal)
    setTotalIntPaid(
      (((answer * loanMonths - principal) * 100) / 100).toFixed(2)
    )
  }

  const invalidPrinHandle = () => {
    if (principal > 1000000 || principal < 1000) {
      return true
    } else return false
  }

  const invalidYearsHandle = () => {
    if (loanYears < 1 || loanYears > 40) {
      return true
    } else {
      return false
    }
  }

  const invalidMonthsHandle = () => {
    if (loanMonths < 1 || loanMonths > 480) {
      return true
    } else {
      return false
    }
  }

  const invalidIntHandle = () => {
    if (yearlyInt < 1 || yearlyInt > 99) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={onCalculate} className="form">
        <TextField
          className="text-field"
          type="number"
          onKeyDown={preventChars}
          onChange={onChangePrincipal}
          value={principal}
          label={invalidPrinHandle() ? "Error" : "Loan amount"}
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          error={invalidPrinHandle()}
          helperText={invalidPrinHandle() ? "Invalid loan amt" : false}
        />
        <br />
        <TextField
          className="text-field"
          type="number"
          onKeyDown={preventChars}
          onChange={onChangeLoanYears}
          value={loanYears}
          label={invalidYearsHandle() ? "Error" : "Loan term in years"}
          variant="standard"
          color="primary"
          error={invalidYearsHandle()}
          helperText={invalidYearsHandle() ? "Invalid loan term" : false}
        />
        <br />
        <TextField
          className="text-field"
          type="number"
          onKeyDown={preventChars}
          onChange={onChangeLoanMonths}
          value={loanMonths}
          label={invalidMonthsHandle() ? "Error" : "Loan term in months"}
          variant="standard"
          error={invalidMonthsHandle()}
          helperText={invalidMonthsHandle() ? "Invalid loan term" : false}
        />
        <br />
        <TextField
          className="text-field"
          type="number"
          onKeyDown={preventChars}
          onChange={onChangeYearlyInt}
          value={yearlyInt}
          label={invalidIntHandle() ? "Error" : "Interest rate per year"}
          variant="standard"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          error={invalidIntHandle()}
          helperText={invalidIntHandle() ? "Invalid interest rate" : false}
        />
        <br />
        <Button
          id="calculate-btn"
          color="primary"
          variant="contained"
          type="submit"
          disabled={
            invalidPrinHandle() ||
            invalidMonthsHandle() ||
            invalidYearsHandle() ||
            invalidIntHandle()
              ? true
              : false
          }
        >
          Calculate
        </Button>
      </form>
      <div className="payment">
        <MonthlyPay
          totalMonthPay={monthlyPay}
          principal={totalPrinPaid}
          interest={totalIntPaid}
        />
      </div>
    </div>
  )
}
