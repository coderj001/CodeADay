/* eslint-env jest */
/**
 * Given a list of strings, group the anagrams together.
 * Return a list of lists where each inner list contains strings that are anagrams of each other.
 */

const groupAnagram = require('./groupAnagrams')

describe('groupAnagram()', () => {
  test('Given array of strings "cat", "tac", "bat", "tab", should return group [["cat", "tac"], ["bat", "tab"]] ', () => {
    const given = ['cat', 'tac', 'bat', 'tab']
    const expected = [['cat', 'tac'], ['bat', 'tab']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })

  test('Given empty array, should return an empty array', () => {
    const given = []
    const expected = []

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })

  test('Given array with single element, should return an array with that element', () => {
    const given = ['hello']
    const expected = [['hello']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })

  test('Given array with no anagrams, should return array with each element as a separate list', () => {
    const given = ['abc', 'def', 'xyz']
    const expected = [['abc'], ['def'], ['xyz']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })

  test('Given array with anagrams having the same sum of ASCII values, should return correct groups', () => {
    const given = ['cat', 'dog', 'ate', 'act', 'god', 'tea']
    const expected = [['cat', 'act'], ['dog', 'god'], ['ate', 'tea']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })

  test('Given array with all identical strings, should return array with one list containing all elements', () => {
    const given = ['aaa', 'aaa', 'aaa']
    const expected = [['aaa', 'aaa', 'aaa']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })

  test('Given array with all empty strings, should return array with one empty list', () => {
    const given = ['', '', '']
    const expected = [['', '', '']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })
})
