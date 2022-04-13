/**
 * @param {number[]} nums
 * @return {number}
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