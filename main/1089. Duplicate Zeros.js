/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 
 * 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

   注意：请不要在超过该数组长度的位置写入元素。

   要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 */

var duplicateZeros = function (arr) {
  // 进入记录最开始arr的长度
  const len = arr.length

  for (let i = 0; i < len; i++) {
    // 如果遇到0，在当前位置插入0
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      // 跳过插入的0
      i += 1;
    }
  }
  // 最后删除多余的数组元素
  arr.splice(len)
};

duplicateZeros(
  [1, 0, 2, 3, 0, 4, 5, 0])