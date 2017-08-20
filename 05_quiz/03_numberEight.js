/*
2) 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

hint)  
문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
*/

// 1.1~10,000 모두 배열에 담기. 쪼개서.
// 1.1 
// 2. 배열에 담은 숫자 요소들 중 8의 갯수 구하기
// 3. count

var numStr = ""; 
// 10000까지의 숫자를 문자열로 합친다. 
for (var i = 1; i<=10000; i++){
  numStr += i;
}

var count = 0;
// numStr까지의 문자열 중 8을 발견하면 카운팅한다.
for (var j = 0; j<numStr.length; j++){
  if (numStr[j] == 8){
    count = count + 1;
  } else {
  }
}
console.log(count); // 4000
// // splitnum = numArr.
// console.log(numArr);
