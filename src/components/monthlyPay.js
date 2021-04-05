import React from "react"

export default function MonthlyPay(props) {
  return (
    <div className="payment-container">
      <div>
        <h3>Monthly Payments</h3>
        <h1>${props.totalMonthPay}</h1>
      </div>
      <div className="payment-container">
        <h3>Total Principal Paid</h3>
        <h3>${props.principal}</h3>
      </div>
      <div className="payment-container">
        <h3>Total Interest Paid</h3>
        <h3>${props.interest}</h3>
      </div>
    </div>
  )
}
