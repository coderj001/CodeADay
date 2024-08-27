// :dynamicprogramming:recursion:memoization:dynamic:
// Dynamic programming and Recursion with memoization
// https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/

function maxSubsetSumNoAdjacent (nums) {
  const n = nums.length

  // Handle edge cases
  if (n === 0) return 0
  if (n === 1) return nums[0]

  const dp = new Array(n).fill(-1)

  // Recursion
  solveUntil(n - 1, nums, dp)
  solveNonRecursion(nums)
  return solveWithNoSpaceComplexity(nums)
}

// O(n) Time | O(n) Space
function solveUntil (ind, arr, dp) {
  // Base case: return the value at index 0
  if (ind === 0) return arr[ind]
  if (ind === 1) return Math.max(arr[ind], arr[ind - 1])

  // If the index is out of bounds, return 0
  if (ind < 0) return 0

  // Check if the result for this index has already been calculated
  if (dp[ind] !== -1) return dp[ind]

  const pick = arr[ind] + solveUntil(ind - 2, arr, dp)
  const noPick = solveUntil(ind - 1, arr, dp)

  dp[ind] = Math.max(pick, noPick)

  return dp[ind]
}

// O(n) Time | O(n) Space
function solveNonRecursion (array) {
  if (array.length < 0) return 0
  if (array.length === 1) return array[0]
  let maxSums = Array.from(array)
  maxSums[1] = Math.max(array[0], array[1])
  for (let i = 2, len = array.length; i < len; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
  }
  return maxSums[maxSums.length - 1]
}

// O(n) Time | O(1) Space
function solveWithNoSpaceComplexity (array) {
  if (array.length < 0) return 0
  if (array.length === 1) return array[0]

  let noPick = array[0]
  let pick = Math.max(array[1], noPick)

  for (let i = 2, len = array.length; i < len; i++) {
    let current = Math.max(pick, noPick + array[i])
    noPick = pick
    pick = current
  }
  return pick
}

module.exports = maxSubsetSumNoAdjacent
