/**
 * Maximum and minimum of an array
 *
 */

function getMinMax (arr) {
  if (arr.length === 1) {
    return [arr[0], arr[0]]
  }
  arr.sort(function (a, b) { return a - b })
  return [arr[arr.length - 1], arr[0]]
}

module.exports = getMinMax
