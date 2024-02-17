/* eslint-env jest */
/**
 *
 * shiftToRight(80, 3) ➞ 10
 * shiftToRight(-24, 2) ➞ -6
 * shiftToRight(-5, 1) ➞ -3
 * shiftToRight(4666, 6) ➞ 72
 * shiftToRight(3777, 6) ➞ 59
 * shiftToRight(-512, 10) ➞ -1
 *
 */

const shiftToRight = require('./shiftToRight')

describe('shiftToRight()', () => {
  test('Given 80 and 3, should return 10', () => {
    const given = {
      arg1: 80,
      arg2: 3
    }
    const expected = 10

    const actual = shiftToRight(given.arg1, given.arg2)
    expect(actual).toEqual(expected)
  })
})
