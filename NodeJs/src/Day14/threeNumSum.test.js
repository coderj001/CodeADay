/* eslint-env jest */
/**
 * Three Number Sum:
 * Given an array of numbers and a value K, write a function
 * that can find a triplet pair that sums to value K.
 */

const threeNumSum = require('./threeNumSum')

describe('threeNumSum()', () => {
  // Basic test case with positive numbers
  test('should return [1, 2, 3] when these three numbers sum to K=6', () => {
    const given = [1, 2, 3, 4, 5]
    const K = 6
    const expected = [1, 2, 3]

    const actual = threeNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  test('should return [-8, 2, 6], [-8, 3, 5] or [-6, 1, 5] when these three numbers sum to K=0', () => {
    const given = [12, 3, 1, 2, -6, 5, -8, 6]
    const K = 0

    const expectedOptions = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5]
    ]

    const actual = threeNumSum(given, K)
    expect(expectedOptions).toContainEqual(actual)
  })

  // Test case where no such triplet exists
  test('should return null when no three numbers sum to K=100', () => {
    const given = [1, 2, 3, 4, 5]
    const K = 100
    const expected = null

    const actual = threeNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  // Test case with multiple valid triplets
  test('should return one of the valid triplets [1, 2, 3] or [2, 3, 1] when K=6', () => {
    const given = [1, 2, 3, 4, 5]
    const K = 6
    const expectedOptions = [
      [1, 2, 3],
      [2, 3, 1]
    ]

    const actual = threeNumSum(given, K)
    expect(expectedOptions).toContainEqual(actual)
  })

  // Edge case with zeros and negative numbers
  test('should return [-1, 0, 1] when these three numbers sum to K=0', () => {
    const given = [-1, 0, 1, 2]
    const K = 0
    const expected = [-1, 0, 1]

    const actual = threeNumSum(given, K)
    expect(actual).toEqual(expected)
  })
})
