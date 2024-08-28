// Time: O(n^2) | Space: O(1)
function threeNumSum (array, K) {
  array.sort((a, b) => a - b)
  for (let cn = 0, len = array.length - 2; cn < len; cn++) {
    let l = cn + 1
    let r = array.length - 1
    while (l < r && l > cn && r > cn) {
      let cs = array[cn] + array[l] + array[r]
      if (cs === K) return [array[cn], array[l], array[r]]

      if (cs < K) l += 1
      else r -= 1
    }
  }
  return null
}

module.exports = threeNumSum
