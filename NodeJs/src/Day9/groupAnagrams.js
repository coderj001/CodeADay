function groupAnagram (arrayOfStrings) {
  const obj = {}
  for (let i in arrayOfStrings) {
    let sum = 0
    for (let j in arrayOfStrings[0]) {
      sum += arrayOfStrings[i][j].charCodeAt(0)
    }
    if (sum in obj) {
      obj[sum].push(arrayOfStrings[i])
    } else {
      obj[sum] = [arrayOfStrings[i]]
    }
  }
  return Object.values(obj).reverse()
}

module.exports = groupAnagram
