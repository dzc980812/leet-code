/**
 *  截断句子
 *  句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。
 *
 *  例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
 *  给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子
 */

/**
 * 示例 1：
 * 输入：s = "Hello how are you Contestant", k = 4
   输出："Hello how are you"
   解释：
   s 中的单词为 ["Hello", "how" "are", "you", "Contestant"]
   前 4 个单词为 ["Hello", "how", "are", "you"]
   因此，应当返回 "Hello how are you"

 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 这道题的大体思路就是找到k个单词并通过空格分隔
var truncateSentence = function (s, k) {
  // 首先将输入的s利用split对空格截取k个，然后再用join转回字符串
  return s.split(' ', k).join(' ')
};

// 上面一行代码的方式未免有些投机取巧
var truncateSentence1 = function (s, k) {
  // res 用来存放结果，count用来存放过了几个空格，因为单词用空格分开的所以经历了几个空格代表有多少个单词
  let res = '',
    count = 0;
  for (let i = 0; i < s.length; i++) {
    // 当s里面有空格时，count自增
    if (s[i] === ' ') {
      count++;
    }
    // 当count等于k时退出循环
    if (count === k) break;
    // res加上当前s
    res += s[i];

  }
  return res;
};
truncateSentence1('Hello how are you Contestant', 4)