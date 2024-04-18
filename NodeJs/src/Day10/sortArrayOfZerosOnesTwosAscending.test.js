/* eslint-env jest */
/** sortArrayOfZerosOnesTwosAscending
 * sort arr of 0, 1 and 2 in ascending without using sort function.
 */

const sortArrayOfZerosOnesTwos = require('./sortArrayOfZerosOnesTwosAscending')

describe('sortArrayOfZerosOnesTwos()', () => {
  it('should sort an array of zeros, ones, and twos in ascending order', () => {
    const inputArray = [2, 0, 1, 2, 1, 0, 1, 2, 0]
    const sortedArray = sortArrayOfZerosOnesTwos(inputArray)
    const expectedArray = [0, 0, 0, 1, 1, 1, 2, 2, 2]
    expect(sortedArray).toEqual(expectedArray)
  })
})
