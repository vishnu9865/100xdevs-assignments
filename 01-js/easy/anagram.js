/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }
  // declare maps
  let str1Map = new Map();
  let str2Map = new Map();
  // populate str1
  for (let i = 0; i < str1.length; i ++ ) {
    let chr = str1[i].toLowerCase();
    if (str1Map.has(chr)) {
     str1Map.set(chr, str1Map.get(chr) + 1);
    } else {
     str1Map.set(chr, 1);
    }
  }
  // populate str2
  for (let i = 0; i < str2.length; i ++) {
    let chr = str2[i].toLowerCase();
    if (str2Map.has(chr)) {
      str2Map.set(chr, str2Map.get(chr) + 1);
    } else {
      str2Map.set(chr, 1);
    }
  }
  // compare both maps
  for (let [key, value] of str1Map) {
    // return false if character doesn't exist on one string
    if (!str2Map.has(key)) {
      console.log('hi');
      return false;
    // return false if character occurrences mismatch
    } else if (str2Map.get(key) !== value) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
