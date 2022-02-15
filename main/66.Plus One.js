/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 一行解决没意义
  // return String(BigInt(digits.join('')) + 1n).split('')

  // 循环判断 
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

// console.log(plusOne(
//   [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// ))

console.log(plusOne(
  [1, 3, 9]
))