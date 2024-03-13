/* eslint-env jest */
/**
 * Testcase Maximum and minimum of an array using minimum number of comparisons
 *
 */

const getMinMax = require('./getMinMax')

describe('getMinMax()', () => {
  test('should return -10, 100', () => {
    const given = [-10, 0, 50, 100]
    const expected = [100, -10] // Expected maximum is 100, minimum is -10
    const actual = getMinMax(given)
    expect(actual).toEqual(expected)
  })

  test('should return -5, 5', () => {
    const given = [0, -5, 5, 0]
    const expected = [5, -5] // Expected maximum is 5, minimum is -5
    const actual = getMinMax(given)
    expect(actual).toEqual(expected)
  })

  test('should return 2, 2', () => {
    const given = [2, 2, 2, 2]
    const expected = [2, 2] // Expected maximum and minimum are both 2
    const actual = getMinMax(given)
    expect(actual).toEqual(expected)
  })

  test('should return 1, 1', () => {
    const given = [1]
    const expected = [1, 1] // Only one element, maximum and minimum are both 1
    const actual = getMinMax(given)
    expect(actual).toEqual(expected)
  })

  test('should return -5, -1', () => {
    const given = [-1, -2, -3, -4, -5]
    const expected = [-1, -5] // Expected maximum is -1, minimum is -5
    const actual = getMinMax(given)
    expect(actual).toEqual(expected)
  })
})
