/* eslint-env jest */
/**
 * Testcase for 2nd larger arr
 *
 */

const secondLargest = require('./secondLargest')

describe('secondLargest()', () => {
  test('should return 3 when array is in ascending order', () => {
    const given = [1, 2, 3, 4, 5]
    const expected = 4 // Expected second largest distinct element is 4
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })

  test('should return 2 when array is unordered', () => {
    const given = [2, 1, 3, 4, 5]
    const expected = 4 // Expected second largest distinct element is 4
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })

  test('should return -1 when array length is less than 2', () => {
    const given = [1]
    const expected = -1 // Array length is less than 2
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })

  test('should return -1 when all elements are same', () => {
    const given = [1, 1, 1, 1]
    const expected = -1 // All elements are same, no distinct second largest
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })

  test('should return correct second largest with negative numbers', () => {
    const given = [-10, -5, -2, -3, -7]
    const expected = -3 // Expected second largest distinct element is -3
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })

  test('should return correct second largest with floating point numbers', () => {
    const given = [1.5, 2.3, 0.7, 1.2, 2.5]
    const expected = 2.3 // Expected second largest distinct element is 2.3
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })

  test('should return correct second largest with large numbers', () => {
    const given = [100000, 200000, 50000, 150000]
    const expected = 150000 // Expected second largest distinct element is 150000
    const actual = secondLargest(given)
    expect(actual).toEqual(expected)
  })
})
