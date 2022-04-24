/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 实现 strStr() 函数。
   给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/implement-strstr
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i
      }
    }
  }
  return -1;
}
console.log(strStr("mississippi", "issip"), 34)