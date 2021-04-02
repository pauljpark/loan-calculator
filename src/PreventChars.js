export const preventChars = (e) =>
  (e.key === "-" || e.key === "+" || e.key === "e") && e.preventDefault()
