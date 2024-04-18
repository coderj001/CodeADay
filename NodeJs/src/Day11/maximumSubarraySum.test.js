/* eslint-env jest */
/** Given an array Arr[] of N integers.
  * Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
 */

const maximumSubarraySum = require('./maximumSubarraySum')

describe('maximumSubarraySum()', () => {
  it('should return the sum of the maximum subarray', () => {
    const arr1 = [1, 2, 3, -2, 5]
    const result1 = maximumSubarraySum(arr1)
    expect(result1).toBe(9) // Maximum subarray sum is 1 + 2 + 3 + (-2) + 5 = 9

    const arr2 = [-2, -3, 4, -1, -2, 1, 5, -3]
    const result2 = maximumSubarraySum(arr2)
    expect(result2).toBe(7) // Maximum subarray sum is 4 + (-1) + (-2) + 1 + 5 = 7
  })

  it('should handle arrays with negative numbers', () => {
    const arr = [-1, -2, -3, -4]
    const result = maximumSubarraySum(arr)
    expect(result).toBe(-1) // Maximum subarray sum is just -1 (the single element)
  })

  it('should handle arrays with all positive numbers', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = maximumSubarraySum(arr)
    expect(result).toBe(15) // Maximum subarray sum is the sum of all elements
  })

  it('should handle arrays with a single element', () => {
    const arr = [5]
    const result = maximumSubarraySum(arr)
    expect(result).toBe(5) // Maximum subarray sum is the single element
  })
})
