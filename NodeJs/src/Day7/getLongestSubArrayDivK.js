/**
 * Longest subarray with sum divisible by K
 */

function getLongestSubArrDivByK (arr, N, K) {
  let sum; let j; let i = 0
  let maxl = 0
  for (i = 0; i < N; i++) {
    sum = 0
    for (j = i; j < N; j++) {
      sum += arr[j]
      if (sum % K === 0) {
        maxl = Math.max(maxl, j - i + 1)
      }
    }
  }
  return maxl
}

module.exports = getLongestSubArrDivByK
