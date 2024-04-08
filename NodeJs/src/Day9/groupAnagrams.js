// function groupAnagram (arrayOfStrings) {
//   const obj = {}
//   for (let i in arrayOfStrings) {
//     let sum = 0
//     for (let j in arrayOfStrings[0]) {
//       sum += arrayOfStrings[i][j].charCodeAt(0)
//     }
//     if (sum in obj) {
//       obj[sum].push(arrayOfStrings[i])
//     } else {
//       obj[sum] = [arrayOfStrings[i]]
//     }
//   }
//   return Object.values(obj).reverse()
// }

function groupAnagram (arrayOfStrings) {
  const obj = {}
  for (let i in arrayOfStrings) {
    const mySet = new Set(arrayOfStrings[i].split(''))
    const key = [...mySet].sort().join('')
    if (key in obj) {
      obj[key].push(arrayOfStrings[i])
    } else {
      obj[key] = [arrayOfStrings[i]]
    }
  }
  return Object.values(obj)
}

module.exports = groupAnagram
