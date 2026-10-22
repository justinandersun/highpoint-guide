// Pure date helpers for highpoints whose public access follows a recurring
// calendar rule (e.g. "the first weekend of June") instead of fixed dates,
// so guide copy doesn't need manual updates every year.

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function firstWeekdayOnOrAfter(year, monthIndex, day, weekday) {
  const date = new Date(year, monthIndex, day)
  date.setDate(date.getDate() + ((weekday - date.getDay() + 7) % 7))
  return date
}

// The Saturday+Sunday making up the first full weekend of a month -- i.e.
// the earliest Saturday/Sunday pair that both fall within it.
export function firstFullWeekendOfMonth(year, monthIndex) {
  const saturday = firstWeekdayOnOrAfter(year, monthIndex, 1, 6)
  const sunday = new Date(saturday)
  sunday.setDate(sunday.getDate() + 1)
  return [saturday, sunday]
}

// US Presidents Day (3rd Monday of February) and the weekend before it.
export function presidentsDayPrecedingWeekend(year) {
  const firstMonday = firstWeekdayOnOrAfter(year, 1, 1, 1)
  const presidentsDay = new Date(firstMonday)
  presidentsDay.setDate(presidentsDay.getDate() + 14)
  const saturday = new Date(presidentsDay)
  saturday.setDate(saturday.getDate() - 2)
  const sunday = new Date(presidentsDay)
  sunday.setDate(sunday.getDate() - 1)
  return [saturday, sunday]
}

// Projects a list of per-year window generators (e.g.
// `(year) => firstFullWeekendOfMonth(year, 5)`) forward from `now`,
// returning the next `count` windows in chronological order.
export function upcomingWeekends(generators, now = new Date(), count = 5) {
  const today = startOfDay(now)
  const windows = []
  let year = today.getFullYear()
  while (windows.length < count) {
    generators.forEach((generate) => {
      const window = generate(year)
      if (window[1] >= today) windows.push(window)
    })
    year += 1
  }
  windows.sort((a, b) => a[0] - b[0])
  return windows.slice(0, count)
}

// Which year's annual cycle is current, for a cycle that ends on a fixed
// month/day each year (e.g. a lottery's last milestone) -- rolls forward to
// next year's cycle once this year's has fully finished.
export function currentCycleYear(now, { endMonth, endDay }) {
  const today = startOfDay(now)
  const year = today.getFullYear()
  return today > new Date(year, endMonth, endDay) ? year + 1 : year
}
