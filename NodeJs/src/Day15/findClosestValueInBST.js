// Time, Avg: O(log(n))  Worst: O(n)
function findClosestValueInBST (tree, K) {
  let closest = tree.data
  while (tree !== null) {
    if (Math.abs(K - closest) > Math.abs(K - tree.data)) {
      closest = tree.data
    }
    if (K > tree.data) tree = tree.right
    else if (K < tree.data) tree = tree.left
    else break
  }
  return closest
}

module.exports = findClosestValueInBST
