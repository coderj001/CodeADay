/* eslint-env jest */
/** Given an array nums[] of size n,
 * where nums[i] denotes the number of characters in one word.
 * Let K be the limit on the number of characters that
 * can be put in one line (line width).
 * Put line breaks in the given sequence such that the lines
 * are printed neatly.
 * Assume that the length of each word is smaller than the line width.
 * When line breaks are inserted there is a possibility
 * that extra spaces are present in each line.
 * The extra spaces include spaces put at the end of every line
 * except the last one.
 *
 * You have to minimize the following total cost where
 * total cost = Sum of cost of all lines,
 * where cost of line is = (Number of extra spaces in the line)2.
 *
 */

// const wordWrap = require('./wordWrap')

describe('wordWrap()', () => {
  test('TODO: wordWrap', () => {
    const expected = 10
    const actual = 10

    expect(actual).toEqual(expected)
  })
  // test('Example 1: Given input {3, 2, 2, 5} and line width 6, should return minimum total cost 10', () => {
  //   const nums = [3, 2, 2, 5]
  //   const k = 6
  //   const expected = 10

  //   const actual = wordWrap(nums, k)
  //   expect(actual).toEqual(expected)
  // })

  // test('Example 2: Given input {3, 2, 2} and line width 4, should return minimum total cost 5', () => {
  //   const nums = [3, 2, 2]
  //   const k = 4
  //   const expected = 5

  //   const actual = wordWrap(nums, k)
  //   expect(actual).toEqual(expected)
  // })

  // test('Single word with line width greater than word length, should return minimum total cost of extra spaces', () => {
  //   const nums = [3]
  //   const k = 5
  //   const expected = 4

  //   const actual = wordWrap(nums, k)
  //   expect(actual).toEqual(expected)
  // })

  // test('All words fit in one line, should return minimum total cost 0', () => {
  //   const nums = [2, 3, 4]
  //   const k = 10
  //   const expected = 0

  //   const actual = wordWrap(nums, k)
  //   expect(actual).toEqual(expected)
  // })

  // test('Words cannot fit in any line, each word goes on a separate line, should return total cost of extra spaces for each line', () => {
  //   const nums = [4, 5, 6]
  //   const k = 3
  //   const expected = 25

  //   const actual = wordWrap(nums, k)
  //   expect(actual).toEqual(expected)
  // })

  // test('Random test case with varying word lengths and line width, should return minimum total cost', () => {
  //   const nums = [6, 4, 3, 7, 2]
  //   const k = 10
  //   const expected = 15

  //   const actual = wordWrap(nums, k)
  //   expect(actual).toEqual(expected)
  // })
})
