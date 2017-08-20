/*
# 10. 정수제곱근 판별하기

nextSqaure함수는 정수 n을 매개변수로 받는다.
n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’을 리턴하는 함수를 작성하라.
예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.
*/

// 1. n의 제곱근을 비교한다. a에 할당 // a*a = n ?   true -> x+1제곱근 : 'no'
// 2. 


function nextSqaure(n){
  // 1. n의 제곱근을 root에 할당한다.
  var root = Math.sqrt(n);
  // 2. n이 root의 제곱근인지 확인한다.
  // 2-1. 맞으면 root+1의 제곱근 반환 > Math.pow를 써보자.
  // 2-2. 아니면 'no'반환
  if(root*root === n) {
    return Math.pow(root+1,2);
  } else {
    return 'no';
  }
}

/*
function nextSquare(n){
  var result = root*root === n ? Math.pow(root+1,2) : 'no';
  return result;
}
*/

console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144