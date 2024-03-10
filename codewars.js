// Implement the function unique_in_order which takes as argument 
// a sequence and returns a list of items without any elements 
// with the same value next to each other and preserving the original order of elements.
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
const uniqueInOrder = (value) => {
  const result = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] === value[i+1]) continue;
    result.push(value[i])
  }
  return result;
}

// [6kyu]
// Digital root is the recursive sum of all the digits in a number. 
// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.
//    16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
const digitalRoot = (num) => {
  let strNum = String(num);
  let result = 0;
  if (strNum.length === 1) return strNum;
  for (const i of strNum) {
    result += Number(i);
  }
  return digitalRoot(result);
}
