/* eslint-env jest */
/**
 * Given a string S, find the longest palindromic substring in S.
 * Substring of string S: S[ i . . . . j  ] where 0 ≤ i ≤ j < len(S).
 * Palindrome string: A string that reads the same backward.
 * More formally, S is a palindrome if reverse(S) = S.
 * In case of conflict, return the substring which occurs first
 * ( with the least starting index ).
 */

const longestPalindromeString = require('./longestPalindromeString')

describe('longestPalindromeString()', () => {
  test('Given "aaaabbaa", should return "aabbaa"', () => {
    const input = 'aaaabbaa'
    const expected = 'aabbaa'
    const actual = longestPalindromeString(input)
    expect(actual).toEqual(expected)
  })

  test('Given "abc", should return "a"', () => {
    const input = 'abc'
    const expected = 'a'
    const actual = longestPalindromeString(input)
    expect(actual).toEqual(expected)
  })

  test('Given an empty string, should return an empty string', () => {
    const input = ''
    const expected = ''
    const actual = longestPalindromeString(input)
    expect(actual).toEqual(expected)
  })

  test('Given "racecar", should return "racecar"', () => {
    const input = 'racecar'
    const expected = 'racecar'
    const actual = longestPalindromeString(input)
    expect(actual).toEqual(expected)
  })

  test('Given "abacdfgdcaba", should return "aba"', () => {
    const input = 'abacdfgdcaba'
    const expected = 'aba'
    const actual = longestPalindromeString(input)
    expect(actual).toEqual(expected)
  })

  test('Given "xyz", should return "x"', () => {
    const input = 'xyz'
    const expected = 'x'
    const actual = longestPalindromeString(input)
    expect(actual).toEqual(expected)
  })
})
