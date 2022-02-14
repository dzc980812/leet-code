/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res = i
      return res;
    } else if (target > nums[i] && target < nums[i + 1]) {
      res = i + 1
      return res;
    } else if (target === 1 && nums[0] >= 1) {
      res = 0;
      return res;
    } else {
      target > 0 ? res = nums.length : 0;
    }
  }
  return target
};

console.log(searchInsert([2, 5], 1), '25')