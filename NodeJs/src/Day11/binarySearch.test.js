/* eslint-env jest */
/**
 */

const binarySearch = require('./binarySearch')

describe('binarySearch()', () => {
  it('should return the index of the target element if it exists in the array', () => {
    const arr = [1, 3, 5, 7, 9, 11]
    const target = 7
    const expectedIndex = 3
    const resultIndex = binarySearch(arr, target)
    expect(resultIndex).toBe(expectedIndex)
  })

  it('should return -1 if the target element does not exist in the array', () => {
    const arr = [1, 3, 5, 7, 9, 11]
    const target = 6
    const expectedIndex = -1
    const resultIndex = binarySearch(arr, target)
    expect(resultIndex).toBe(expectedIndex)
  })
})
