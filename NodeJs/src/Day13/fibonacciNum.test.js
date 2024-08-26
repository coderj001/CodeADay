/* global BigInt */
/* eslint-env jest */
/** Find the nth Fibonacci number using dynamic programming (e.g., memoization or tabulation)
 */

const fibonacciNum = require('./fibonacciNum')
const { performance } = require('perf_hooks')

describe('fibonacciNum()', () => {
  // Test for correctness
  test('should return 55 for fibonacciNum(10)', () => {
    const given = 10
    const expected = BigInt(55)

    const actual = fibonacciNum(given)
    expect(actual).toEqual(expected)
  })

  test('should return 832040 for fibonacciNum(30)', () => {
    const given = 30
    const expected = BigInt(832040)

    const actual = fibonacciNum(given)
    expect(actual).toEqual(expected)
  })

  // Time-based test cases for performance
  test('should compute fibonacciNum(40) within acceptable time', () => {
    const given = 40
    const expected = BigInt(102334155)

    const startTime = performance.now()
    const actual = fibonacciNum(given)
    const endTime = performance.now()

    expect(actual).toEqual(expected)

    const elapsedTime = endTime - startTime
    console.log(`Time taken for fibonacciNum(${given}): ${elapsedTime}ms`)

    // Test that it runs within an acceptable time limit (e.g., 100ms)
    expect(elapsedTime).toBeLessThan(100)
  })

  test('should compute fibonacciNum(50) efficiently', () => {
    const given = 50
    const expected = BigInt(12586269025)

    const startTime = performance.now()
    const actual = fibonacciNum(given)
    const endTime = performance.now()

    expect(actual).toEqual(expected)

    const elapsedTime = endTime - startTime
    console.log(`Time taken for fibonacciNum(${given}): ${elapsedTime}ms`)

    // Set a time limit; for example, it should complete within 150ms
    expect(elapsedTime).toBeLessThan(150)
  })

  test('should compute fibonacciNum(100) efficiently', () => {
    const given = 100
    const expected = BigInt('354224848179261915075')

    const startTime = performance.now()
    const actual = fibonacciNum(given)
    const endTime = performance.now()

    expect(actual).toEqual(expected)

    const elapsedTime = endTime - startTime
    console.log(`Time taken for fibonacciNum(${given}): ${elapsedTime}ms`)

    // Set a larger time limit for very large inputs, e.g., within 200ms
    expect(elapsedTime).toBeLessThan(200)
  })
})
