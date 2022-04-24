/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
   你可以假设数组是非空的，并且给定的数组总是存在多数元素。
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/majority-element
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var majorityElement = function (nums) {
  let count = 0;
  let curValue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      curValue = nums[i]
    }

    if (nums[i] === curValue) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return curValue
};

majorityElement([6, 5, 5])