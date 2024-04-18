/**
 * Leetcode: https://leetcode.com/problems/sort-colors/description/
 *
 */

function sortArrayOfZerosOnesTwos (arr) {
  let count = [0, 0, 0]
  for (let v in arr) {
    count[arr[v]]++
  }
  let sortedArray = []
  for (let v = 0; v < count.length; v++) {
    for (let i = 0; i < count[v]; i++) {
      sortedArray.push(v)
    }
  }
  return sortedArray
}

module.exports = sortArrayOfZerosOnesTwos
