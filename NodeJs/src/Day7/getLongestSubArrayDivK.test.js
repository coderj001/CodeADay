/* eslint-env jest */
/**
 * Longest subarray with sum divisible by K
 *
 */

const getLongestSubArrayDivByK = require('./getLongestSubArrayDivK')

describe('getLongestSubArrayDivByK()', () => {
  test('should return 4 for array [2, 7, 6, 1, 4, 5] and K=3', () => {
    const array = [2, 7, 6, 1, 4, 5]
    const N = array.length
    const K = 3
    const expected = 4
    const actual = getLongestSubArrayDivByK(array, N, K)
    expect(actual).toEqual(expected)
  })

  test('should return 5 for array [4, 7, 9, 10, 2, 3, 5] and K=5', () => {
    const array = [4, 7, 9, 10, 2, 3, 5]
    const N = array.length
    const K = 5
    const expected = 5 // The longest subarray with sum divisible by 5 is [7, 9, 10, 2, 3]
    const actual = getLongestSubArrayDivByK(array, N, K)
    expect(actual).toEqual(expected)
  })

  test('should return 4 for array [8, 20, 7, 5, 4] and K=5', () => {
    const array = [8, 20, 7, 5, 4]
    const N = array.length
    const K = 5
    const expected = 4 // The longest subarray with sum divisible by 5 is [20, 7, 5, 4]
    const actual = getLongestSubArrayDivByK(array, N, K)
    expect(actual).toEqual(expected)
  })

  test('should return 0 for empty array and any value of K', () => {
    const array = []
    const N = array.length
    const K = 3
    const expected = 0 // The array is empty, so the longest subarray length is 0
    const actual = getLongestSubArrayDivByK(array, N, K)
    expect(actual).toEqual(expected)
  })

  test('should return 0 if no subarray is divisible by K', () => {
    const array = [2, 3, 7, 11]
    const N = array.length
    const K = 5
    const expected = 0 // No subarray has sum divisible by 5
    const actual = getLongestSubArrayDivByK(array, N, K)
    expect(actual).toEqual(expected)
  })

  test('should return 1 for array [6] and K=2', () => {
    const array = [6]
    const N = array.length
    const K = 2
    const expected = 1 // The only element is divisible by 2
    const actual = getLongestSubArrayDivByK(array, N, K)
    expect(actual).toEqual(expected)
  })
})
