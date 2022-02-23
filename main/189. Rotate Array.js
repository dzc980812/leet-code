/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */


//  利用额外数组
// var rotate = function (nums, k) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr[(i + k) % nums.length] = nums[i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = arr[i]
//   }
//   return nums
// };

// 双指针
// const revers = function (nums, left, right) {
//   while (left < right) {
//     let temp = nums[left];
//     nums[left] = nums[right];
//     nums[right] = temp;
//     left++;
//     right--;
//   }
// }


// var rotate = function (nums, k) {
//   revers(nums, 0, nums.length - 1)
//   revers(nums, 0, k % nums.length - 1);
//   revers(nums, k % nums.length, nums.length - 1)
//   return nums
// };