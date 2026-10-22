import * as React from 'react'
import { currentCycleYear } from '../utils/accessDates'

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

// Same visitor-local, client-only rendering approach as CharlesMoundDates --
// see that file for why. All four milestones are derived from one resolved
// cycle year so they can never show a self-contradictory mix of this year's
// and next year's dates.
const WhitneyLotteryDates = () => {
  const [dates, setDates] = React.useState(null)

  React.useEffect(() => {
    const year = currentCycleYear(new Date(), { endMonth: 3, endDay: 22 })
    setDates({
      applyStart: new Date(year, 1, 1),
      applyEnd: new Date(year, 2, 1),
      results: new Date(year, 2, 15),
      claimDeadline: new Date(year, 3, 21),
      release: new Date(year, 3, 22),
    })
  }, [])

  if (!dates) return null

  return (
    <ul>
      <li>Apply: {formatDate(dates.applyStart)} &ndash; {formatDate(dates.applyEnd)}</li>
      <li>Results announced: {formatDate(dates.results)}</li>
      <li>Claim your permit ($15/person) by: {formatDate(dates.claimDeadline)}</li>
      <li>Unclaimed permits released: {formatDate(dates.release)} at 7am Pacific</li>
    </ul>
  )
}

export default WhitneyLotteryDates
