import React from "react"
import { tips } from "../api/tips"

export default function RandomTips() {
  return <h2>{tips[0]}</h2>
}
