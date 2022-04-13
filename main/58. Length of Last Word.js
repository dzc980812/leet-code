/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {

    if (s[i] == ' ' && res) {
      break;
    } else if (s[i] !== ' ') {
      res++
    }
  }

  return res
};

console.log(lengthOfLastWord('a cdab'))