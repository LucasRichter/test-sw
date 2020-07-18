
const types = {
  day: 24,
  days: 24,
  week: 168,
  weeks: 168,
  month: 730.001,
  months: 730.001,
  year: 8760,
  years: 8760
}

const parseHours = (timePeriodString) => {
  try {
    let [units, type] = timePeriodString.split(' ')
    units = parseFloat(units)
    if (!isNaN(units) && types[type]) {
      return units * types[type]
    } else {
      return 0
    }
  } catch (error) {
    return 0
  }
}

export default (mglt, ship) => {
  const totalHours = parseFloat(mglt) / parseInt(ship.MGLT)
  const hoursPerResupply = parseHours(ship.consumables)
  return Math.floor(totalHours / hoursPerResupply)
}
