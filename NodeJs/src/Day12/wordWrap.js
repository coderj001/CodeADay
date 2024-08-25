// https://www.geeksforgeeks.org/problems/word-wrap1646/1
// https://www.geeksforgeeks.org/word-wrap-problem-dp-19/
function wordWrap (nums, K) {
  let arr = [[3], [2, 2], [5]]
  console.log(costCal(arr, K))
}

function costCal (arr, K) {
  let cost = 0
  for (let i = 0; i < arr.length; i++) {
    let sum = K
    if (i === arr.length - 1) {
      if (arr[i].length > 1) {
        cost += Math.pow(arr[i].length - 1, 2)
      }
    } else {
      for (let j of arr[i]) {
        sum -= j
      }
      if (arr[i].length > 1) {
        sum -= (arr[i].length - 1)
      }
      cost += Math.pow(sum, 2)
    }
  }
  return cost
}

module.exports = wordWrap
