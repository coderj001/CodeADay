/* global BigInt */
// Fibonacci Series using Dynamic Programming
// Memonization

function fibonacciNum (n, memo = {}) {
  if (n === 0) return BigInt(0)
  if (n === 1) return BigInt(1)

  if (memo[n]) {
    return memo[n]
  }

  memo[n] = fibonacciNum(n - 1, memo) + fibonacciNum(n - 2, memo)
  return memo[n]
}

module.exports = fibonacciNum
