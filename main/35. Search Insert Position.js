/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

    请必须使用时间复杂度为 O(log n) 的算法。
 */

var searchInsert = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }

  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2)

    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }

  return l;
};
// var searchInsert = function (nums, target) {
//   let res = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       res = i
//       return res;
//     } else if (target > nums[i] && target < nums[i + 1]) {
//       res = i + 1
//       return res;
//     } else if (target === 1 && nums[0] >= 1) {
//       res = 0;
//       return res;
//     } else {
//       target > 0 ? res = nums.length : 0;
//     }
//   }
//   return target
// };

console.log(searchInsert([1, 3, 5, 6], 2), '25')