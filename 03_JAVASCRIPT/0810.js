// 문제 풀이

// 1. 두 수를 입력받아 큰 수를 반환하는 함수
function max (a,b){
    if(a>b){
      console.log(a); // return으로 쓰자.
    }else{
      console.log(b);
    }
  };
  max(200,100);
//
Math.max(200,300);


//조교님
function max (a,b){
  // if(typeof a === number && typeof b === number) : 문제에 따라 타입검사하는것을 잊지말자.
  // if (a>b){
  //   return a;
  // } else{
  //   return b;
  // }
  // 자바스크립트를 안쓰고 구현하라고 하는 회사에서는..

  // return a>b ? a:b;

  // return Math.max(a,b); // 제일 좋은 방법인 듯.
}







// 2. 숫자를 입력하면 한글 요일을 반환하는 함수 (Date함수없이?)
function a(num){
  // var today = new Date(); 
  var dayNames = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
  var day = dayNames[num];
  console.log(day);
}

a(1);

// 조교님
function getDay(){
  var days = ['일요일','월요일', '화요일', '수요일', '목요일', '금요일','토요일'];
  return days[n%7];
}
console.log(getDay(10));
console.log(getDay(new Date().getDay()));






// 3. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function average(array){
  var a=0;
  for(var i=0; i<array.length; i++)
    {
      a=a+array[i];
    }
    return (a/array.length);
}
var testArray = [10,100,1]
console.log(average(testArray));
 
// 조교님
function avg(numArr){
  var result = 0;
  for (var i = 0; l = numArr.length; i<l; i++){ // array에서 매번 length를 물어봐야함. 그래서 이 l변수를 따로 할당하는 것이 시간을 조금더 단축시킬 수 있다.
    // (var l = numArr.lenght; l--;) // 뒤에서 더해도 상관없으니.. 
    // return numArr.reduce(fucntion(prev, curr){return prev + curr;})/numArr.length;
    // reduce는 콜백함수
    // 리엑트는.. 자동완성기능은 filter를 이용하는데, 배열을 많이 사용한다.
    result += numArr[i];
  }
  return result/l;
}






// 4. 숫자를 n개 전달 받아 숫자들의 평균을 반환하는 함수
//조교님
function avgN(){
  // var result = 0;
  // for (var l = arguments.length; l--;){
  //   result += arguments[l];
  // } //이게 가장 효율적일듯

  // return result/l;
  // return Array.prototype.slice.call(arguments)
}
console.log(avgN[1,2,3,4,5,6]);






// 5. 문자열을 배열로 전달 받아 문자열 하나로 반환하는 함수
function string(array){
  var a = "";
  for(var i=0; i<array.length; i++){
    a = a + array[i];
  }
  return a;
}

var testArray_string = ['안녕','하세요',' 너무 ','졸립고 ','함수는 ','정말 어렵네요.']
console.log(string(testArray_string));

// 조교님
function oneString(stringArr){
  return stringArr.join('');
}
console.log(oneString(['a','b','c','d']));


// 6. 세 수를 입력받아 큰 수를 반환하는 함수 1번 함수 사용하기

Math.max(100,10,19);
//조교님
function threeMas(a,b,c){
  return max(max(a,b),c);
  return Math.max(a,b,c);
}
console.log(threeMax(5,10,22));






// 7. n개의 인자를 받아서 가장 큰 수를 반환
// function max(a,b,c){
//   if(a>b){
//     if(a>c){
//       console.log(a);
//     }else{
//       console.log(b);
//     }
//   }else{
//     console.log(c);
//   }
// }
// max(100,10,19);
function nMax(...numArr){ //...numArr은 es6에서 배열로 인지한다.
  //es 5 이하
  var numArr = Array.prototype.slice.call(arguments);
  return Math.max.apply(null,numArr); // (this 컨텍스트, 배열)
  // es6+
  return Math.max(...numArr);
}
console.log(nMax(12,54,1112,1231,123,123235))







// 8. 문자열을 역순으로 바꿔주는 함수
function reverse(str){
  var c = str.split('');
  var a = c.reverse();
  var b = [];
  for(var i=0; i<a.length; i++){
	b = b+a[i]
  }
  console.log(b);
}
reverse('안녕하세요');

// 조교님 (이건 어떤 )
function reverseMsg(msg){
  var result='';
  for(var l = msg.length; l--;){
    result += msg[l];
  }
  return result;
}
console.log(reverseMsg('안녕하세요'));

// 자바스크립트에서만 할 수 있는 방법
function reverseMsg(msg){
  return msg.split('').reverse().join(''); //메서드 체이닝
}
console.log(reverseMsg('안녕하세요'));







// 9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대소문자 숫자 포함
// 조교님
function pwValidation(pw){
  // 글자수, 영어대문자, 영어소문자, 숫자를 체크해야함.
  // 1. 체크형 변수를 하나 만들자.
  pw = pw.trim(); // 공백처리시 trim 사용.
  var upperChk = false;
  var lowerChk = false;
  var numChk = false;
  var l = pw.length;
  if(l>8 && l<=20){
    for(var i=0; i<l; i++){
      if('a'<= pw[i] && pw[i] <= 'z'){
        lowerChk = true;
        if(lowerChk && numChk && upperChk){
          break;
        }
      }
      else if('A'<= pw[i] && pw[i] <= 'Z'){
        upperChk = true;
      }
      else if('0' <= pw[i] && pw[i] <= '9'){
        numChk = true;
      }
    }
  }
}
console.log

// 조교님 _정규표현식
function pwValidation(pw){
  return /^.*(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(pw.trin)
}
