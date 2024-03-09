function shiftToRight (arg1, arg2) {
  if (arg2 === 0) {
    return arg1
  }
  return shiftToRight(arg1 >> 1, --arg2)
}

module.exports = shiftToRight
