/**
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s ，根据下述规则反转字符串：
   所有非英文字母保留在原有位置。
   所有英文字母（小写或大写）位置反转。
   返回反转后的 s 。
   输入：s = "ab-cd"
   输出："dc-ba"
 */
var reverseOnlyLetters = function (s) {
  let l = 0,
    r = s.length - 1;
  let reg = /^[a-zA-Z]$/
  s = s.split('')

  while (l <= r) {
    if (reg.test(s[l]) && reg.test(s[r])) {
      [s[l], s[r]] = [s[r], s[l]]
      l++;
      r--;
    } else if (!reg.test(s[l]) && reg.test(s[r])) {
      l++
    } else if (reg.test(s[l]) && !reg.test(s[r])) {
      r--;
    } else {
      l++;
      r--
    }
  }
  return s.join('')
};
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))