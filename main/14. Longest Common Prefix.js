/**
 * 14. 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 * 
 * 思路
 * 首先使用sort排序
 * sort排序会根据每项的每个字符进行排序，
 * 如['abc', 'abe', 'abcd', 'abcde']; 使用sort排序后结果为
 * ['abc', 'abcd', 'abcde', 'abe'];
 * 这样取第一项和最后一项循环判断即可。
 */
var longestCommonPrefix = function (strs) {
  // 处理特殊情况 
  if (strs.length === 1) return strs[0]
  // 使用sort对参数排序
  const arr = strs.sort();
  // 记录结果的值
  let res = '';
  // 循环次数为排序后第一项的长度
  for (let i = 0; i < arr[0].length; i++) {
    // 判断排序后第一项和最后一项是否一致
    if (arr[0][i] === arr[arr.length - 1][i]) {
      // 如果一致结果加等于当前循环到的字符
      res += arr[0][i]
    } else {
      // 如果不一致直接返回即可
      return res
    }
  }
  // 返回结果
  return res
};
// console.log(longestCommonPrefix(["abcd", 'abce', 'abcf', 'abcde']))
console.log(longestCommonPrefix(["dog", "dogracecar", "doggcar"]))