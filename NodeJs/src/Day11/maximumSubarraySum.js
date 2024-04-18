/**
 * Maximum Subarray Sum problem,
 * Also called Kadane's Algorithm
 */
function maximumSubarraySum (arr) {
  let max = -Infinity
  for (let i = 0, len = arr.length; i < len; i++) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j]
    }
    if (sum > max) {
      max = sum
    }
  }
  return max
}

module.exports = maximumSubarraySum
