
/**
 * binarySearch Algorithm
 * Time Complexity: log(n)
 *
 */
// function binarySearch(arr, x) {
//   let l = 0;
//   let r = arr.length - 1;
//   let mid;
//   while (r >= l) {
//     mid = l + Math.floor((r - l) / 2);
//     if (arr[mid] === x) {
//       return mid;
//     }
//     if (arr[mid] > x) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }
//   return -1;
// }

/**
 * binarySearch Algorithm in recursion
 *
 */
function binarySearch (arr, x, l = 0, r = arr.length - 1) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2)

    if (arr[mid] === x) {
      return mid
    }

    if (arr[mid] > x) {
      return binarySearch(arr, x, l, mid - 1)
    } else {
      return binarySearch(arr, x, mid + 1, r)
    }
  }

  return -1
}

module.exports = binarySearch
