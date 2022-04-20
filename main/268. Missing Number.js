/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * https://leetcode-cn.com/problems/missing-number/
 */

/**
 * Hash Map
 * 先把数组存进Map里面，然后利用Map的has方法判断是否存在，不存在则返回，存在则返回数组长度即可
 */
var missingNumber = function (nums) {
  let myMap = new Map();
  const len = nums.length

  for (let i = 0; i < len; i++) {
    myMap.set(nums[i], i);
  }

  for (let i = 0; i < len; i++) {
    if (!myMap.has(i)) return i
  }

  return len
};

/**
 * 排序
 * 排序后判断当前遍历的值是否与下标一致，不一致返回下标，一致返回数组长度即可
 */

// var missingNumber = function (nums) {
//   nums.sort((a, b) => a - b)
//   for (let i = 0; i < nums.length; i++) {
//     if (+nums[i] !== i) return i
//   }
//   return nums.length
// };


console.log(missingNumber([0, 1]))