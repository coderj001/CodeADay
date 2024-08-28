function twoNumSum (array, K) {
  for (let i = 0, len = array.length; i < len; i++) {
    for (let j = i + 1, len = array.length; j < len; j++) {
      if (array[i] + array[j] === K) {
        return [array[i], array[j]]
      }
    }
  }
  return null
}

module.exports = twoNumSum
