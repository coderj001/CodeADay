/* eslint-env jest */
/**
 * Given a list of strings, group the anagrams together.
 * Return a list of lists where each inner list contains strings that are anagrams of each other.
 */

const groupAnagram = require('./groupAnagrams')

describe('groupAnagram()', () => {
  test('Given array of strings "cat", "tac", "bat", "tap", should return group [["cat", "tac"], ["bat", "tap"]] ', () => {
    const given = ['cat', 'tac', 'bat', 'tab']
    const expected = [['cat', 'tac'], ['bat', 'tab']]

    const actual = groupAnagram(given)
    expect(actual).toEqual(expected)
  })
})
