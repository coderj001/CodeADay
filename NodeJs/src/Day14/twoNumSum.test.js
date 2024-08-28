/* eslint-env jest */
/**
 * Two Number Sum:
 * Given an array of numbers and a value K, write a function
 * that can find a pair that sums to value K.
 */

const twoNumSum = require('./twoNumSum')

describe('twoNumSum()', () => {
  test('should return [11, -1] when the sum of these two numbers equals K=10', () => {
    const given = [3, 5, -4, 8, 11, 1, -1, 6]
    const K = 10
    const expected = [11, -1]

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  test('should return [1, 5] when the sum of these two numbers equals K=6', () => {
    const given = [1, 2, 5, 3]
    const K = 6
    const expected = [1, 5]

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  test('should return null when no pair adds up to K=10', () => {
    const given = [1, 2, 4, 3]
    const K = 10
    const expected = null

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  test('should return [5, 5] when the sum of these two numbers equals K=10', () => {
    const given = [5, 5, 1, 3]
    const K = 10
    const expected = [5, 5]

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  test('should return null for an empty array', () => {
    const given = []
    const K = 5
    const expected = null

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  // Edge case with negative numbers
  test('should return [-2, 5] when the sum of these two numbers equals K=3', () => {
    const given = [1, -2, 4, 5]
    const K = 3
    const expected = [-2, 5]

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  // Edge case where the only valid pair includes zero
  test('should return [0, 4] when the sum of these two numbers equals K=4', () => {
    const given = [0, 1, 4, 5]
    const K = 4
    const expected = [0, 4]

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })

  // Edge case with single element array
  test('should return null when the array has only one element', () => {
    const given = [3]
    const K = 3
    const expected = null

    const actual = twoNumSum(given, K)
    expect(actual).toEqual(expected)
  })
})
