/* eslint-env jest */
/** find closest value in binary search tree
 * Ex: find K=12
 *              10
 *            5   15
 *          2  6 13 22
 *        2        14
 *        closest value is, 12 -> 13
 */

const findClosestValueInBST = require('./findClosestValueInBST')

describe('findClosestValueInBST()', () => {
  test('should return the closest value when the tree has multiple nodes and the closest value is in the right subtree', () => {
    const tree = {
      data: 10,
      left: {
        data: 5,
        left: {
          data: 2,
          left: { data: 1, left: null, right: null },
          right: null
        },
        right: {
          data: 5,
          left: null,
          right: null
        }
      },
      right: {
        data: 15,
        left: {
          data: 13,
          left: null,
          right: { data: 14, left: null, right: null }
        },
        right: { data: 22, left: null, right: null }
      }
    }
    const K = 12
    const expected = 13

    const actual = findClosestValueInBST(tree, K)
    expect(actual).toEqual(expected)
  })

  test('should return the closest value when the tree has only one node', () => {
    const tree = { data: 10, left: null, right: null }
    const K = 12
    const expected = 10

    const actual = findClosestValueInBST(tree, K)
    expect(actual).toEqual(expected)
  })

  test('should return the closest value when K is smaller than all values in the tree', () => {
    const tree = {
      data: 10,
      left: { data: 5, left: null, right: null },
      right: { data: 15, left: null, right: null }
    }
    const K = 1
    const expected = 5

    const actual = findClosestValueInBST(tree, K)
    expect(actual).toEqual(expected)
  })

  test('should return the closest value when K is larger than all values in the tree', () => {
    const tree = {
      data: 10,
      left: { data: 5, left: null, right: null },
      right: { data: 15, left: null, right: null }
    }
    const K = 20
    const expected = 15

    const actual = findClosestValueInBST(tree, K)
    expect(actual).toEqual(expected)
  })

  test('should return the closest value when the tree has a negative number', () => {
    const tree = {
      data: 10,
      left: { data: -5, left: null, right: null },
      right: { data: 15, left: null, right: null }
    }
    const K = 3
    const expected = 10

    const actual = findClosestValueInBST(tree, K)
    expect(actual).toEqual(expected)
  })
})
