/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
  // numbers[0] = numbers[0] + numbers[1];
  // numbers[1] = numbers[0] - numbers[1];
  // numbers[0] = numbers[0] - numbers[1];

  // [numbers[0], numbers[1]] = [numbers[1], numbers[0]]

  numbers.reverse();

  return numbers
};
console.log(swapNumbers([0, 2147483647]))