/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 
 * 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。
   幸运数是指矩阵中满足同时下列两个条件的元素：
   在同一行的所有元素中最小
   在同一列的所有元素中最大
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
   ### 解题思路
       首先找到最小的数组，在里面找到最大数，
       找到最大数后使用最大数下标提取那一列的数组
       然后判断是否为这一列最大的数
 */
var luckyNumbers = function (matrix) {
  // 最小数组
  let minArr = []
  // 最小数组中最大数的列数组
  let fArr = []
  // 形成最小数组
  for (let i = 0; i < matrix.length; i++) {
    minArr.push(Math.min.apply(null, matrix[i]));
  }
  // 提取最小数组中最大的数
  let maxNum = Math.max.apply(null, minArr)
  // 最大数的下标
  let maxL = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].find((res, i) => {
      if (res === maxNum) {
        maxL = i
      }
    })
  }
  // 利用最大数的下标提取出最大数的列
  for (let i = 0; i < matrix.length; i++) {
    fArr.push(matrix[i][maxL])
  }
  // 最大列的最大数
  let fMaxNum = Math.max.apply(null, fArr)
  // 比较最小数组中的最大数，与列中的最大数是否一致
  return maxNum === fMaxNum ? [maxNum] : [];
};


console.log(luckyNumbers([
  [3, 6],
  [7, 1],
  [5, 2],
  [4, 8]
]))
// console.log(luckyNumbers([
//   [1, 10, 4, 2],
//   [9, 3, 8, 7],
//   [15, 16, 17, 12]
// ]))