/**
 * https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/2
*/
function longestPalindromeString (str) {
  if (str.length < 1 && typeof (str) === 'string') {
    return ''
  }
  if (str.length === 3) {
    return str[0]
  }
  let maxSubStr = ''
  for (let i = 0; i < str.length; i++) {
    let subStr = ''
    for (let j = i; j < str.length; j++) {
      subStr += str[j]
      if (checkPalindrome(subStr)) {
        if (maxSubStr.length < subStr.length) {
          maxSubStr = subStr
        }
      }
    }
  }
  return maxSubStr
}

function checkPalindrome (str) {
  let rev = ''
  for (let i of str) {
    rev = i + rev
  }
  return rev === str
}

// TODO: Solve in dynamic programming
// https://www.geeksforgeeks.org/longest-palindromic-substring-using-dynamic-programming-2/

module.exports = longestPalindromeString
