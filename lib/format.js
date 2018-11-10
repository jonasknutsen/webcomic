const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export function readableDate (dateInt) {
  let day = dateInt.toString().substring(6,8)
  let strippedDay = day.startsWith('0') ? day.substring(1) : day
  let month = parseInt(dateInt.toString().substring(4,6))
  let year = dateInt.toString().substring(0,4)
  let dayEnding = day.substring(1) === 1 ? 'st' : day.substring(1) === 2 ? 'nd' :  day.substring(1) === 3 ? 'rd' : 'th'
  let returnValue = strippedDay + dayEnding + ' of ' + months[month - 1] + ' ' + year
  return returnValue
  
}
