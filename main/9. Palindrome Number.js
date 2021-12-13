/**
 * 回文数
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

   回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

 * @param {number} x
 * @return {boolean}
 * 思路，因为回文数为前面是后面的反转，所以找到中间点后对前面进行截取并翻转即可
 * 需要注意的点是如果数字长度为偶数和数字长度为奇数时，截取位置是不同的
 */
var isPalindrome = function (x) {
  // 先将数字转换为字符串，为了获取长度
  const str = x + ''
  // 回文数中间数的位置
  const item = Math.ceil(str.length / 2);
  // 回文数前半部分
  let front;
  // 回文数后半部分
  const after = str.slice(item, str.length)

  if ((str.length) % 2 === 0) {
    // 传入参数长度为偶数
    front = str.slice(0, item).split('').reverse().join('')
  } else {
    // 传入参数长度为奇数
    front = str.slice(0, item - 1).split('').reverse().join('')
  }
  return +front === +after
};

// 为上一种精简版
var isPalindrome1 = function (x) {
  const str = x + ''
  const item = Math.ceil(str.length / 2);
  const front = ((str.length) % 2 === 0 ? str.slice(0, item) : str.slice(0, item - 1)).split('').reverse().join('')
  const after = str.slice(item, str.length)
  return +front === +after
};

// 最简单的办法，回文数反转过来与原来相等
var isPalindrome2 = function (x) {
  const str = (x + '').split('').reverse().join('')
  return +str === x;
};
console.log(isPalindrome(1234321))
