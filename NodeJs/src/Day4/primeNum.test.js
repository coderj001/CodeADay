/* eslint-env jest */
/**
 *
 * primeNum(5) ➞ 1, 5
 * primeNum(25) ➞ 1, 5, 25
 *
 */

const primeNum = require('./primeNum')

describe('primeNum()', () => {
  test('primeNum(5) ➞ 1, 5', () => {
    const given = 5
    const expected = [1, 5]
    const actual = primeNum(given)
    expect(actual).toEqual(expected)
  })

  test('primeNum(25) ➞ 1, 5, 25', () => {
    const given = 5
    const expected = [1, 5, 25]
    const actual = primeNum(given)
    expect(actual).toEqual(expected)
  })
})
