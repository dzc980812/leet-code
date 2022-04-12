/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 使用map
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 判断Map 是否存在，如果存在获取当前值并加1，如果不存在赋值1，或者当前存在时随便改个数也可以
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  let res = null;
  // 查找map,value为1的key
  map.forEach((val, key) => {
    if (val === 1) {
      res = key
    }
  })
  return res

};

console.log(singleNumber([2, 2, 1, 1, 3]))