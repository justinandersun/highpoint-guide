import * as React from 'react'
import { firstFullWeekendOfMonth, presidentsDayPrecedingWeekend, upcomingWeekends } from '../utils/accessDates'

const GENERATORS = [
  presidentsDayPrecedingWeekend,
  (year) => firstFullWeekendOfMonth(year, 5), // June
  (year) => firstFullWeekendOfMonth(year, 6), // July
  (year) => firstFullWeekendOfMonth(year, 7), // August
  (year) => firstFullWeekendOfMonth(year, 8), // September
]

function formatWindow([start, end]) {
  const month = start.toLocaleDateString('en-US', { month: 'long' })
  return `${month} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
}

// This is visitor-local, always-changing content a static build can't bake
// in correctly for everyone, so it renders nothing until mounted, then
// computes from the visitor's own clock -- keeping it accurate indefinitely
// with no manual yearly updates and no hydration mismatch.
const CharlesMoundDates = () => {
  const [windows, setWindows] = React.useState(null)

  React.useEffect(() => {
    setWindows(upcomingWeekends(GENERATORS))
  }, [])

  if (!windows) return null

  return (
    <ul>
      {windows.map(([start, end]) => (
        <li key={start.toISOString()}>{formatWindow([start, end])}</li>
      ))}
    </ul>
  )
}

export default CharlesMoundDates
