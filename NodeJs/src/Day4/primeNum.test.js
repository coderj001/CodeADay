/* eslint-env jest */
/**
 *
 *
 */

const primeNum = require('./primeNum')
const { performance } = require('perf_hooks')

describe('primeNum()', () => {
  test('primeNum(0) ➞ []', () => {
    const given = 0
    const expected = []
    const actual = primeNum(given)
    expect(actual).toEqual(expected)
  })
  test('primeNum(1) ➞ []', () => {
    const given = 1
    const expected = []
    const actual = primeNum(given)
    expect(actual).toEqual(expected)
  })
  test('primeNum(5) ➞ [2, 3, 5]', () => {
    const given = 5
    const expected = [2, 3, 5]
    const actual = primeNum(given)
    expect(actual).toEqual(expected)
  })
})

describe('primeNum() Time Complexity', () => {
  test('primeNum() with different input sizes', () => {
    const sizes = [10, 100, 1000, 10000] // Different input sizes to test
    const timeTaken = []

    sizes.forEach(size => {
      const startTime = performance.now() // Start measuring time
      primeNum(size) // Call your function with input size 'size'
      const endTime = performance.now() // Stop measuring time

      const duration = endTime - startTime
      timeTaken.push(duration)
    })

    // Output time taken for each input size
    console.log('Time taken for each input size in milliseconds:', timeTaken)
  })
})
