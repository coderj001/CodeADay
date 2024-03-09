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

  test('Given -24 and 2, should return -6', () => {
    const given = {
      arg1: -24,
      arg2: 2
    }
    const expected = -6

    const actual = shiftToRight(given.arg1, given.arg2)
    expect(actual).toEqual(expected)
  })

  test('Given -5 and 1, should return -3', () => {
    const given = {
      arg1: -5,
      arg2: 1
    }
    const expected = -3

    const actual = shiftToRight(given.arg1, given.arg2)
    expect(actual).toEqual(expected)
  })

  test('Given 4666 and 6, should return 72', () => {
    const given = {
      arg1: 4666,
      arg2: 6
    }
    const expected = 72

    const actual = shiftToRight(given.arg1, given.arg2)
    expect(actual).toEqual(expected)
  })

  test('Given 3777 and 6, should return 59', () => {
    const given = {
      arg1: 3777,
      arg2: 6
    }
    const expected = 59
    const actual = shiftToRight(given.arg1, given.arg2)
    expect(actual).toEqual(expected)
  })

  test('Given -512 and 10, should return -1', () => {
    const given = {
      arg1: -512,
      arg2: 10
    }
    const expected = -1
    const actual = shiftToRight(given.arg1, given.arg2)
    expect(actual).toEqual(expected)
  })
})
