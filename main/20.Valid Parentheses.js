/** 
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 * 输入：s = "()"     输出：true
 * 输入：s = "()[]{}" 输出：true
 * 输入：s = "(]"     输出：false
 */

/**
 * 
 * 思路：
 * 这个题感觉有点难度，最一开始只考虑了两种情况AABBCC ABCCBA这两种情况，然后用了最笨的方法，结果一顿操作猛如虎，一点提交二百五。
 * 想了大半个下午，也没想明白，跟朋友吐槽后，朋友随手甩出他的题解，看了大佬的思路后瞬间明白道理，
 * 借鉴大佬的一句话如下：
 * 符号要求的括号一定是满足的条件是：如果右括号出现，那么右括号的左边必须是左括号，这样才能满足要求。
 * 
 * 其实就是一个栈操作，循环的时候每次判断是否出现了右括号，出现右括号就利用pop方法，去栈里拿到最后一项，比较是否等于对象映射的值
 * 如果没出现右括号就加入栈中
 */
var isValid = function (s) {
  // 栈 栈中都是左括号
  let stack = [];
  // 用做映射使用
  const obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (i = 0; i < s.length; i++) {
    //  判断是否出现右括号
    if (obj[s[i]]) {
      // 出现右括号后，利用pop方法拿到栈中最后一项，判断栈的最后一项是否与当前右括号映射出的左括号一致
      if (stack.pop() !== obj[s[i]]) return false
    } else {
      // 如果循环的不是右括号即入栈
      stack.push(s[i])
      console.log(stack)
    }
  }

  // 最后返回如果栈的长度是否是0，如果不是0 说明有多余括号未被删除即无效括号
  return stack.length === 0;


  /**
   *  错误的思路
   */
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