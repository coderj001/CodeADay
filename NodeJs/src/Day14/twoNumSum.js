// :array:twonumsum:space:hashtable:
// Time: O(n^2) | Space: O(1)
// function twoNumSum (array, K) {
//   for (let i = 0, len = array.length; i < len; i++) {
//     for (let j = i + 1, len = array.length; j < len; j++) {
//       if (array[i] + array[j] === K) {
//         return [array[i], array[j]]
//       }
//     }
//   }
//   return null
// }

// If you wanna faster use this
// Time: O(n) | Space: O(n)
function twoNumSum (array, K) {
  const table = {}
  for (let i = 0, len = array.length; i < len; i++) {
    const complement = K - array[i]
    if (table[complement] === undefined) table[array[i]] = complement
    else return [complement, array[i]].sort((a, b) => a - b)
  }
  return null
}

// If you wanna use less space
// Time: O(nlog(n)) | Space: O(1)
// array need to be sorted
// function twoNumSum (array, K) {
//   array.sort((a, b) => a - b)
//   let l = 0; let r = array.length - 1
//   while (l < r) {
//     let sum = array[l] + array[r]
//     if (sum === K) {
//       return [array[l], array[r]]
//     }
//     if (sum < K) l += 1
//     else r -= 1
//   }
//   return null
// }

module.exports = twoNumSum
