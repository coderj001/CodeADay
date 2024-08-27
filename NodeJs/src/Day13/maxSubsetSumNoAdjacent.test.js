// :dynamicprogramming:recursion:memoization:dynamic:
/* eslint-env jest */
/** Find the greastest sum we can generate without adding up 2 nums that are
 * next to each other. And nums should be positive.
 *  Time Complicity: O(n)
 *  Space Complicity: O(n)
 * Solution:
 *    array [7, 10, 12, 7, 9, 14]
 *    Formula,
 *        maxSums[i] = max(maxSums[i-1], maxSum[i-2] + array[i])
 *        [7, ] -> 0th skip
 *        [7, 10, ] -> 1th max btw 7 and 10, maxSum[i-2] don't exists
 *        [7, 10, 19, ] -> 2th max btw 10 and 7 + 12 = 19
 *        [7, 10, 19, 19, ] -> 3th max btw 19 and 10 + 7 = 17
 *        [7, 10, 19, 19, 28, ] -> 4th max btw 19 and 19 + 9 = 28
 *        [7, 10, 19, 19, 28, ] -> 5th max btw 28 and 19 + 14 = 33
 */

const maxSubsetSumNoAdjacent = require('./maxSubsetSumNoAdjacent')

describe('maxSubsetSumNoAdjacent()', () => {
  test('should return 10 for [3, 2, 5, 10, 7]', () => {
    const given = [3, 2, 5, 10, 7]
    const expected = 15 // Picking 3 + 10 = 15

    const actual = maxSubsetSumNoAdjacent(given)
    expect(actual).toEqual(expected)
  })

  test('should return 33 for [7, 10, 12, 7, 9, 14]', () => {
    const given = [7, 10, 12, 7, 9, 14]
    const expected = 33

    const actual = maxSubsetSumNoAdjacent(given)
    expect(actual).toEqual(expected)
  })

  test('should return the only element in the array for [5]', () => {
    const given = [5]
    const expected = 5

    const actual = maxSubsetSumNoAdjacent(given)
    expect(actual).toEqual(expected)
  })

  test('should return 20 for [10, 10, 10, 10, 10]', () => {
    const given = [10, 10, 10, 10, 10]
    const expected = 30 // Picking every other 10, so 10 + 10 + 10 = 30

    const actual = maxSubsetSumNoAdjacent(given)
    expect(actual).toEqual(expected)
  })
})
