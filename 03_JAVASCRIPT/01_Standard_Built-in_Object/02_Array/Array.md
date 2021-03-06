### 배열은 왜 0부터 시작할까?
배열이 0부터 시작하는건 계산하기 편리하도록 하기 위함이다. 배열은 거리(offset)을 이용해서 나타내는데, 컴퓨터는 문자들을 메모리 안에 연결되어진 바이트로 저장을 하게된다. 이후 색인을 사용해(배열 안의 숫자=index) 문자의 위치를 계산하는데. <br>
`만약 data[0]의 위치가 메모리 주소 100번지에 있으면 data[5]는 100번지 + 5 로 빠르게 계산할 수 있다.`
 [잉고래의 잇다이어리](http://ingorae.tistory.com/921)

## 변환 메서드
## 스택 메서드
## 큐 메서드
## 정렬 메서드

## 조작 메서드
### Array.prototype.splice()
주요목적 : 배열 중간에 데이터를 삽입하는 것
- 매개변수가 2개가 오면 시작점(첫번째 인자)에서 해당갯수(두번째 인자)를 삭제한다.
- 매개변수가 3개가 오면 첫번째 인자값의 인덱스에서 두번째 인자값만큼의 개수를 제거 후, 3번째인자부터 마지막부분에.
- 

1. 삭제
`splice(2,0)`은 처음 두개를 삭제함
2. 삽입
배열을 3개 이상 넘기면 배열에 데이터를 삽입할 수 있다.
`splice(매개변수를 삽입할 위치, 0(아무것도 삭제하지 않는다.), 삽입할 데이터 순서)`
`splice(2,0,"red","green")` : 배열 인덱스 2에 문자열 "red"와 "green"을 삽입합니다. 
```js
var colors =["red", "green", "blue"];
var removed = colors.splice(1,1,"red","purple"); // 데이터 2개 추가
                                                 // 1개 제거 
```

3. 대체
삽입과 삭제를 조합하면 원하는 데이터를 다른 데이터로 대체할 수 있다.

## 위치메서드
`indexOf()`
`lastIndexOf()`
2개의 매개변수를 받는데, 첫 번째 매개변수는 `검색할 데이터`이며 
옵션인 두 번째 매개변수는 `검색을 시작할 인덱스`이다.
```js
object.indexOf();
object.lastIndexOf();
```

### indexOf()
indexOf()메서드는 배열의 처음(인덱스 0)에서 검색을 시작하여 마지막까지 검색한다.
- 해당하는 요소가 없을 경우 `-1`반환

### lastIndexOf()
lastIndexOf()메서드는 배열의 마지막에서 검색을 시작하여 처음까지 검색한다.


## 반복메서드 (ECMAScript 5)
이들 메서드는 모두 매개변수를 2개 받는데, <br>
하나는 `배열`의 각 데이터에서 실행할 `함수`이며, 옵션인 다른 하나는 함수를 실행할 `스코프 객체`이다.
- 스코프는 this의 값에 영향을 미칩니다. 
- 콜백 함수는 모든 데이터, 데이터의 인덱스, 배열 자체의 세 가지 매개변수를 받습니다.
- 콜백 함수를 실행했을 때 메서드의 반환 값에 어떤 영향을 미치는지는 메서드에 따라 다릅니다.
- 콜백함수는 함수를 명시적으로 호출하는 방식이 아니라, 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.
  - 콜백함수가 자주 사용되는 대표적인 예는 이벤트 핸들러 처리이다.
  - 콜백함수는 주료 비동기식 처리모델에 사용된다. 
    - 비동기식 처리 모델이란 `처리가 종료하면 호출될 함수(콜백함수)를 미리 매개변수에 전달하고 처리가 종료하면 콜백함수를 호출`하는 것이다.
      - 예) 버튼 클릭 후 특정 애니메이션이 동작할때.
  - 콜백함수는 `클로저`이므로, 콜백 큐에 단독으로 존재하다가 호출되어도 콜백함수를 전달받은 함수의 변수에 접근할 수 있다.

### every()
배열의 모든 데이터에서 콜백 함수를 호출하고 반환 값이 전부 true이면 true를 반환한다.
```js
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){ //모든데이터, 데이터 인덱스, 배열 // 현재 콜백함수로 every 메서드 사용.
  return (item>2);
});
alert(everyResult);

var someResult = numbers.some(function(item,index,array){
  return (item > 2);
});

alert(someResult);
```
some과 같이 생각하면 좋은데, some메서드는 단어 자체에서 볼 수 있듯이 배열 인덱스에 있는 값들이 중 조건에 하나라도 맞는다면, true로 반환한다.

### some()
배열의 모든 데이터에서 콜백 함수를 호출하고 반환 값 중 하나라도 true이면 true를 반환한다.

### filter()
배열의 모든 데이터에서 콜백 함수를 호출하고 `반환 값이 true인 데이터를 새 배열에 저장하여 반환`한다.
- 필터!! 특정 조건에 맞는 데이터만 쿼리하려 할 때 매우 유용
- 필터박스할때 쓰려나?

> 반환값 부분 등등 좋은 예제! 1은 true로 평가된다.
```js
var result = [1, 2, 3, 4, 5].filter(function (element, index, array) {
  console.log('[' + index + '] = ' + element);
  return element % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result);
```

### forEach()
배열의 각 데이터에서 콜백 함수를 실행한다.
`forEach()`메서드에는 반환 값이 없으며 기본적으로 해당 배열에서 for 문을 실행한 것과 마찬가지이다.
- 일반 for구문에 비해 성능이 좋지 않다.

### map()
배열의 모든 데이터에서 콜백 함수를 호출하고 `그 결과를 새 배열에 저장하여 반환`합니다.
- 1:1로 대응하는 배열을 만들 때 유용하다.

## 감소 메서드
배열을 순회하며 콜백 함수를 실행하고 `값을 하나 만들어 반환`한다.
reduce는 첫번째 데이터부터 시작하고, reduceRight은 마지막 데이터부터 시작한다.
### reduce()
### reduceRight()