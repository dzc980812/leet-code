/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
   说明：
   你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/single-number
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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