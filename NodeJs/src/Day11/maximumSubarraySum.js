/**
 * Maximum Subarray Sum problem.
 * Find a non-empty subarray with the largest sum.
 * Also called Kadane's Algorithm
 * https://neetcode.io/courses/advanced-algorithms/0
 */
function maximumSubarraySum (arr) {
  // This is bruteforce implemntation
  // Time Complexity O(n^2)
  let max = -Infinity
  for (let i = 0, len = arr.length; i < len; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      max = Math.max(max, sum)
    }
  }
  return max
}

module.exports = maximumSubarraySum
