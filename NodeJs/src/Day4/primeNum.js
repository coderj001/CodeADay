function primeNum (arg) {
  let arr = []
  for (let i = 1; i <= arg; i++) {
    isPrime(i) && arr.push(i)
  }
  return arr
}

function isPrime (N) {
  if (N === 1) {
    return false
  } else if (N === 2) {
    return true
  } else if (N % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(N); i += 2) {
    if (N % i === 0) {
      return false
    }
  }

  return true
}

module.exports = primeNum
