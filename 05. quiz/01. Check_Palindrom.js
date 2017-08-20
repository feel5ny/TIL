/*
1. Check Palindrom

palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.
*/

// 거꾸로된 문자와 실제 문자가 같은지 체크.
// 1. 거꾸로된 문자가 필요
// 1-1. 문자열을 배열에 한자씩 추가한다. split('')
// 1-2. 배열을 거꾸로. reverse
// 1-3. 거꾸로된 배열을 다시 문자열. join
// 2. return 때 조건문 걸기


function checkPalindrom(str) {
  // 1-1. 문자열을 배열에 한자씩 추가한다. split('')
  var strArrReverse = str.split('').reverse();
  strReverse = strArrReverse.join('');
  return str === strReverse;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true