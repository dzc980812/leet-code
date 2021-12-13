/** 
 *  最短补全词
 *  给你一个字符串 licensePlate 和一个字符串数组 words ，请你找出并返回 words 中的 最短补全词 。
    补全词 是一个包含 licensePlate 中所有字母的单词。
    在匹配 licensePlate 中的字母时：
    忽略 licensePlate 中的 数字和空格 。
    不区分大小写。
    如果某个字母在 licensePlate 中出现不止一次，那么该字母在补全词中的出现次数应当一致或者更多。
    例如：licensePlate = "aBc 12c"，那么它的补全词应当包含字母 'a'、'b' （忽略大写）和两个 'c' 。可能的 补全词 有 "abccdef"、"caaacab" 以及 "cbca" 。
    请你找出并返回 words 中的 最短补全词 。题目数据保证一定存在一个最短补全词。当有多个单词都符合最短补全词的匹配条件时取 words 中 第一个 出现的那个。
 * 
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  // 通过正则将licensePlate数字和空格去掉，变成数组并排序 
  let arr = licensePlate.replace(/[0-9\s]/g, "").toLowerCase().split('').sort();
  // 记录最大值
  let max = 0;
  // 记录当前值
  let res = ''
  // 循环words
  for (let k = 0; k < words.length; k++) {
    // words循环到当前词去除空格并排序
    const w = words[k].split('').sort();
    // 临时变量，用来记录
    let tmp = 0;
    for (let i = 0, j = 0; i < arr.length && j < w.length;) {
      // 如果当前licensePlate的字符，和循环到的words的字符一致，临时变量,i,j自增
      if (arr[i] === w[j]) {
        tmp++, i++, j++;
      } else {
        // 否则判断当前licensePlate的自负是否小于当前words的字符
        arr[i] < w[j] ? i++ : j++
      }
    }
    // 当临时变量小于最大值 或者临时变量等于最大值并且循环到的words单词小与结果时，res等于当前循环到的单词
    if (tmp > max || (tmp === max && w.length < res.length)) {
      res = words[k];
      max = tmp;
    }

  }
  return res;
}