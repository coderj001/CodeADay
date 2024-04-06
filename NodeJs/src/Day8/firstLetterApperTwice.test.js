/* eslint-env jest */
/**
 * Given a string s consisting of only lowercase English letters, return the first letter that appears twice.
 */

const firstLetterApperTwice = require('./firstLetterApperTwice')

describe('firstLetterApperTwice()', () => {
  test('Given "helloworld", should return "l"', () => {
    const given = 'helloworld'
    const expected = 'l'

    const actual = firstLetterApperTwice(given)
    expect(actual).toEqual(expected)
  })

  test('Given "abcde", should return undefined', () => {
    const given = 'abcde'
    const expected = undefined

    const actual = firstLetterApperTwice(given)
    expect(actual).toEqual(expected)
  })

  test('Given "aabbcde", should return "a"', () => {
    const given = 'aabbcde'
    const expected = 'a'

    const actual = firstLetterApperTwice(given)
    expect(actual).toEqual(expected)
  })

  test('Given "abcdefgghijklmnop", should return "g"', () => {
    const given = 'abcdefgghijklmnop'
    const expected = 'g'

    const actual = firstLetterApperTwice(given)
    expect(actual).toEqual(expected)
  })

  test('Given "aabbccddeeff", should return "a"', () => {
    const given = 'aabbccddeeff'
    const expected = 'a'

    const actual = firstLetterApperTwice(given)
    expect(actual).toEqual(expected)
  })

  test('Given "zxyzy", should return "z"', () => {
    const given = 'zxyzy'
    const expected = 'z'

    const actual = firstLetterApperTwice(given)
    expect(actual).toEqual(expected)
  })
})
