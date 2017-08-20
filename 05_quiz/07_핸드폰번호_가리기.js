/*
# 7. 핸드폰번호 가리기

핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.
*/
// 1. 뒤에서 거꾸로 순회하는 메서드 사용. 
// 1-1. 배열을 사용해야함. 
// 1-2. 문자열을 우선 배열에 담기. String.prototype.split()
// 2. 배열 순회시 index = 4부터 끝까지 '*'로 덮어쓰기. > fill 사용하기
// 2-1. .fill('*',-(배열.length),-4)
// 3. 문자열로 변환 후 반환 join

function hideNumbers(str){
  var strArr = str.split(''); // 1. 전달받은 문자열을 배열화 시킨다.(덮어쓰기 메소드는 배열에 있어서..)
  var hideNum = strArr.fill('*',-(strArr.length),-4); //2. 덮어쓰기 fill메서드를 사용한다. 뒤에서 4번째부터 앞쪽까지이므로, length값까지를 범위로 잡음
  // console.log(hideNum); // 확인용
  var result = hideNum.join(''); // 3. 배열을 다시 문자열화 시킨다.
  return result; // 4. 반환
  // console.log(result);   
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888