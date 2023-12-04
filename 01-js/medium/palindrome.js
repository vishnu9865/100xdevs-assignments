/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(/[ \p{P}]/gu, '');
  let n = str.length;
  for (let i = 0; i < n; i ++) {
    let e = n - i - 1;
    if (i > e) {
      break;
    }
    if (str[i] !== str[e]) {
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
