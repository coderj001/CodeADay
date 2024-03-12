/**
 * Given an array Arr of size N, print 2nd Largest element
 *
 */

function secondLargest (arr) {
  if (arr.length < 2) {
    return -1
  }
  let maxVal = Number.MIN_SAFE_INTEGER
  let secondMax = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    } else if (arr[i] < maxVal && arr[i] > secondMax) {
      secondMax = arr[i]
    }
  }
  if (secondMax === Number.MIN_SAFE_INTEGER) {
    return -1
  }
  return secondMax
}

module.exports = secondLargest
