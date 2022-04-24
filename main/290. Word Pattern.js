/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
   这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律
   
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/word-pattern
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var wordPattern = function (pattern, s) {
  let myMap = new Map();
  // 将字符串转成数组
  const arr = s.split(' ');
  // pattern 和 s 的数量对不上直接返回false;
  if (pattern.length !== arr.length) {
    return false;
  } else {
    for (let i = 0; i < pattern.length; i++) {
      // 判断map中是否存在 pattern，如果不存在则添加一条数据
      if (myMap.has(pattern[i])) {
        // 如果存在判断pattern是否可以跟数组项一致
        if (myMap.get(pattern[i]) !== arr[i]) {
          return false
        }
      } else {
        myMap.set(pattern[i], arr[i])
      }
    }
  }

  const mapArr = [];
  // 将map的val转成数组
  myMap.forEach((val) => {
    mapArr.push(val)
  })
  // 因为set里的值是唯一的，所以利用set，判断set和map的长度是否一致，避免出现 abba dog dog dog dog返回true的情况
  return new Set([...mapArr]).size === myMap.size
};

console.log(wordPattern("abba", "dog dog dog dog"))