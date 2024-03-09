function primeNum (arg) {
  let arr = []
  for (let i = 1; i <= arg; i++) {
    if (isPrime(i) && arg % i === 0) {
      arr.push(i)
      console.log(i)
    }
  }
  return arr
}

function isPrime (arg) {
  for (let i = 2; i < arg; i++) {
    if (arg % i === 0) {
      return false
    }
  }
  return true
}

module.exports = primeNum
