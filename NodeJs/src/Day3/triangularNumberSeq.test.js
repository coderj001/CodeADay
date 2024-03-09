/* eslint-env jest */

const triangleNumSeq = require('./triangularNumberSeq')

describe('triangleNumSeq()', () => {
  test('Given 1, should return 1', () => {
    const given = 1
    const expected = 1

    const actual = triangleNumSeq(given)
    expect(actual).toEqual(expected)
  })
})
