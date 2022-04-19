/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
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