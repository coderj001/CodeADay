/**
 * Longest subarray with sum divisible by K
 */

function getLongestSubArrDivByK (arr, N, K) {
  let sum; let j; let i = 0
  for (i = 0; i < N; i++) {
    for (j = i; j < N; j++) {
      sum += arr[j]
    }
    if (sum % K === 0) {
      return j - i + 1
    }
  }
}

module.exports = getLongestSubArrDivByK
