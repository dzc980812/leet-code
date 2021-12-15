/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (i = 0; i < s.length; i++) {
    console.log(obj[s[i]])
    if (obj[s[i]]) {
      if (stack.pop() !== obj[s[i]]) return false
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0;

  // if (s.length & 1 !== 0) return false
  // const obj = {
  //   '(': ')',
  //   '[': ']',
  //   '{': '}'
  // }
  // let arr = []
  // let arr1 = []
  // let flag;

  // for (let i = 0; i < s.length; i += 2) {
  //   arr.push([s[i], s[i + 1]]);
  // }

  // for (let j = 0; j < arr.length; j++) {
  //   if (arr[j][1] === obj[arr[j][0]]) {
  //     flag = true
  //   } else {
  //     flag = false;
  //     break
  //   }
  // }


  // if (!flag) {
  //   for (let i = 0; i < s.length / 2; i++) {
  //     arr1.push([s[i], s[s.length - 1 - i]])
  //   }

  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr1[j][1] === obj[arr1[j][0]]) {
  //       flag = true
  //     } else {
  //       flag = false;
  //       break
  //     }
  //   }
  // }
  // console.log(arr)
  // console.log(arr1)
  // return flag;
}
console.log(isValid("{[]}"));