const isEmail = (value) => {

  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
    {
      return (true)
    }
    return (false)
  }
}

const convertTime = time => {
  let minute = 60*1000
  let hour = 60*minute
  let now = new Date()

  let diff = time - now

  let output = ''


  if (diff/hour >= 1) {
    output += `${Math.trunc(diff/hour)} hour${Math.trunc(diff/hour) >= 2 ? 's' : ''} `
  }

  output += `${(diff % hour / minute).toFixed(0)} minute${(diff % hour / minute).toFixed(0) >= 2 ? 's' : '' } ago`

  return output

}

module.exports = {isEmail, convertTime}