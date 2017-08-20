/*
# 6. 이상한 문자만들기

toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
바꾼 문자열을 리턴하도록 함수를 완성하라.
예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.
*/

// 1. index가 짝수번째 > 대문자(toUpperCase) ,홀수번째 > 소문자.(toLowerCase)
// 2. 단어별로 변환해야한다.. 띄어쓰기 단위로 쪼갠 후 배열에 담기. split(' ')
// 3. 쪼갠 단어의 글자들을 다시 배열에 담기. split('')
// 4. index가 짝수번째 > 대문자, 홀수번째 > 소문자.
// 4-1. 배열을 순회하면서 > 인덱스 짝수 홀수 확인 > 조건에 맞게 반환.
// 5. 다시 단어 문자열로 반환. > join()
// 6. 단어문자열을 띄어쓰기와 같이 다시 join()
// 7. 반환.

function toWeirdCase(s) {
  var wordArr = s.split(' '); // 1. 단어별로 판단이기 때문에 단어로 쪼갠다. 반환은 배열.
  var result =""; //2-3-1. 추가하기 위해 문자열로 초기화
  
  // 2. 배열을 순회하면서, 한 element별,(=단어별) 짝/홀수번째 index를 확인하고, 대문자,소문자로 변환한다.
  // 2-1. 쪼갠 단어가 있는 wordArr 배열의 element를 순회하며 콜백함수를 실행한다.
  wordArr.forEach(function(element,index,array) { 
    var charArr = ""; //2-2-2. 글자에 추가하는 식으로 더하기 위해서 빈 문자열로 초기화.
    for (var i=0; i<element.length; i++){ // 2-2. 단어별 글자에 접근하기 위해 charAt사용. 한 단어당 해당 단어의 글자 길이만큼 순회한다.
      if (i%2 === 0){ // 2-2-1. 글자 인덱스의 값중 짝수번째는 대문자로 변경 후 새로운 문자열에 더한다.
        charArr += element.charAt(i).toUpperCase();
      } else{ // 2-2-3. 홀수는 소문자.
        charArr += element.charAt(i).toLowerCase();
      }
    }
    // 2-2-3. 해당 단어를 최종 문장으로 합칠때 공백을 포함해야하므로, 단어 뒷부분에 공백추가
    charArr += " ";
    // 2-3. 공백까지 추가된 단어들을 result에 추가하면서 최종본을 만든다.
    result += charArr;
  });
  // 3. result를 반환한다.
  return result;
}

console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'


/*
function toWeirdCase(s) {
  var wordArr = s.split(' ');
  // console.log(wordArr);

  // var charArr = [];
  // wordArr.forEach(function(element,index,array){
  //   charArr.push(wordArr[index].split(''));
  // });

  // console.log(wordArr);
  var result ="";
  wordArr.forEach(function(element,index,array) {
    var charArr = "";
    for (var i=0; i<element.length; i++){
      if (i%2 === 0){
        charArr += element.charAt(i).toUpperCase();
      } else{
        charArr += element.charAt(i).toLowerCase();
      }
    }
    charArr += " ";
    result += charArr;
  });
  return result;
}

console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'

*/