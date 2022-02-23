/**
 * @param {number[]} nums
 * @return {number[]}
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 输入：nums = [-4,-1,0,3,10]
   输出：[0,1,9,16,100]
   解释：平方后，数组变为 [16,1,0,9,100]
   排序后，数组变为 [0,1,9,16,100]

 */
var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let res = [];

  while (left <= right) {
    lRes = nums[left] * nums[left];
    rRes = nums[right] * nums[right];

    if (lRes < rRes) {
      res.unshift(rRes);
      right--;
    } else {
      res.unshift(lRes);
      left++;
    }
  }
  return res;
};

console.log(sortedSquares([-7,-3,2,3,11]));