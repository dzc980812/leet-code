/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

   请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */
var moveZeroes = function (nums) {
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] != 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
    fast++
  }
  return nums
};

console.log(moveZeroes([1, 0, 1, 2]))