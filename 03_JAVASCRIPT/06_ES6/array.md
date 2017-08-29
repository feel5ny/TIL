1. `for of` es6의 순회방법
2. `spread operator` 펼침연산자
3. `from()`메서드로 진짜 배열 만들기

<hr>

## for of

```js
var data = [1,2,undefined,NaN,null,""];
data.forEach(function(value){
  console.log("valueis",value);
});

// for-in의 문제점 : object를 순회할 때 사용. 자기 자신이 갖고 있지 않은, 상위에 있는 추가된 값들까지도 포함을 시켜서 반환시킬때도 있다.
for(let value in data){
  console.log(data[idx])
}

//for of : for in의 문제점을 해결한 순회.
for(let value of data){
  console.log(data[idx])
}
```
<지금까지 알고 있었던 순회방법>
- `forEach()`메서드
- `for in` : 문제점이 많다.

<ES6에서 나온 순회방법>
`for of`
- 문자열에서는 한글자씩 순회한다.
- 배열에서 순회할때 사용한다.

## spread operator
<펼침 연산자 = spread operator>

```js
let pre = ["apple", "orange", 100]
let newData = [...pre];

console.log(pre, newData);
```
기존의 참조를 끊고, 메모리의 새로운 공간에 복사되어서 새로운 객체가 생성된 것이다. 

```js
[...pre]; // 펼쳐준다고 생각하면 기억하기 슆다.
```

## spread operator 몇가지 활용

```js
let pre = [100,200,"hello",null];
let newData = [0,1,2,3, ...pre, 4]; // ES5보다 훨씬 더 간편하다.
```
기존보다 쉽게 배열에 추가가 가능하다.

```js
function sum(a,b,c) {
  return a+b+c;
}
let pre = [100,200,300];

console.log(sum.apply(null, pre)); // 그 이전방법
console.log(sum(...arr)); // es6방법
```

어떨때 유용할까?
- 배열을 바꾸지 않고 새로운 값을 `복사`하는 방법을 기본적으로 제공
- 배열을 합치거나, 펼쳐진 상태로 `새로운 함수의 파라미터`로 전달하고자 할때 

## from() 메서드로 진짜 배열 만들기
```js
function addMark() {
  // let newArr
  //for (let i=0; i<arguments.length; i++){
  //  newData.push(arguments[i]+"!");
  //}
  
  let newArray = Array.from(arguments); //arguments로부터 배열을 만든다.
  let newData = arguments.map(function(value){
    return value + "!";
  })
  console.log(newData);
}

addMark(1,2,3,4,5);
```