/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返它们的数组下标。
   你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
   你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - nums[i];
    if (m.has(n2)) {
      return [m.get(n2), i]
    }
    m.set(n, i)
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  // 创建一个Map对象
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 判断是否存在循环到当前数组的值与目标值的差值
    if (m.has(target - nums[i])) {
      // 有就从Map对象里取出
      return [m.get(target - nums[i]), i]
    }
    // 没有则存入Map对象
    m.set(nums[i], i)
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
  // 创建一个对象
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    // 判断对象的key是否存在当前值与目标值的差值
    if (obj[target - nums[i]] !== undefined) {
      // 如果存在则返回
      return [obj[target - nums[i]], i]
    }
    // 没有则存入对象
    obj[nums[i]] = i
  }
};

// 掘金https://juejin.cn/post/6951397740500746253

console.log(twoSum(nums = [3, 2, 4], target = 6));