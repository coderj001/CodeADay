// Implementation 1
// function firstLetterApperTwice (s) {
//   if (s.length > 2 && typeof s === 'string') {
//     let arrOfStr = s.split('')
//     for (let i = 0; i < arrOfStr.length; i++) {
//       for (let j = i + 1; j < arrOfStr.length; j++) {
//         if (arrOfStr[i] === arrOfStr[j]) {
//           return arrOfStr[i]
//         }
//       }
//     }
//   }
// }

function firstLetterApperTwice (s) {
  if (s.length > 2 && typeof s === 'string') {
    let seenLetters = []
    for (let i in s.split('')) {
      let character = s[i]
      if (seenLetters.includes(character)) {
        return character
      } else { seenLetters.push(character) }
    }
  }
}

module.exports = firstLetterApperTwice
