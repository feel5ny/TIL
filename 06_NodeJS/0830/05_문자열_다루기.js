/*
4) 문자열 다루기

alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다
*/
// 1. 문자열 길이 범위 확인. s.length >= 4 && s.length <= 6
// 2. 숫자로만 구성? typeof === 'number' ? true: false;

function alphaString46 (s){
  if (s.length >= 4 && s.length <= 6){
    for (var i = 0; i<s.length; i++){
      var char = s.charAt(i);
      if (typeof char !== 'string'){
        return true;
      } else {
        return false;  
      }
    }
  } else {
    return false;
  }
  
  // return s.length >= 4 && s.length <= 6 ? (typeof (s*1) ==='number'? true: false) : false;
};

console.log(alphaString46('1235a')); //false
console.log(alphaString46('1234')); //true