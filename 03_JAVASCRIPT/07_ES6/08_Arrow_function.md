## Arrow function 활용
```js
() => {...} // 매개변수가 없을 경우
x => {...} // 매개변수가 한개 인 경우
(x,y) => {...} // 매개변수가 여러개인 경우
```
- arrow function에는 arguments 프로퍼티가 없다. 
- ES6에서는 `rest 파라미터`를 사용하여 가변인자를 함수 내부에 배열로 전달할 수 있다. 
- arguments 프로퍼티가 없는 Arrow function에서 가변 인자 함수를 구현하는 경우, rest 파라미터를 사용하여야 한다.

```js
setTimeout (()=>{
  console.log("settimeout arrow")
}, 1000)

let newArr = [1,2,3,4,5].map(function(value, index, object){
  return value*2;
});

// 콜백함수의 단점은, 함수의 인자들이 너무 길고, 많다. (value, index, object)

console.log(newArr);
```
```js
let newArr = [1,2,3,4,5].map((v) => {
  return v*2;
});
```
```js
let newArr = [1,2,3,4,5].map( v => v * 2 );
// return도 생략 가능하다.
// 브레이스 있으면 가독성이 좋다.
// 브레이스 없어도 동작한다. Brace {}
console.log(newArr);
```
### rest paramaters
- ES6 이전에는 인자의 갯수를 사전에 알 수 없는 가변 인자 함수의 경우, arguments 객체를 통해 인자값을 확인한다.
- arguments 객체는 `함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회가능한(iterable) 유사 배열 객체(array-like object)이다.` 함수 객체의 arguments 프로퍼티는 arguments 객체를 값으로 가지며 함수 내부에서 지역변수처럼 사용된다.
```js
function checkNum(){ // 현재 arguments는 배열이 아니다.(유사배열)
  const argArray = Array.prototype.slice.call(arguments);
  consoel.log(argArray);
  argArray.every((v) => typeof v === "number")
}
const result = checkNum(10,2,3,4,5,"44")
```
```js
function checkNum(...argArray){ // ...은 배열화 한다. // 
  argArray.every((v) => typeof v === "number")
}
const result = checkNum(10,2,3,4,5,"44")
```
- spread연산자와 햇갈릴 수도 있는데,
- 매개변수에서 ...을 사용할 경우 `배열화해서 받는다.` 라고 생각하면 된다!
- 인수는 순차적으로 파라미터와 Rest 파라미터에 할당된다.
- Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

```js
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
```
```js
function foo( ...rest, param1, param2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```

## Arrow function의 this context
실행 컨텍스트가 어떻게 바뀔까.

```js
const myObj = {
  runTimeout() {
    wetTimeout(function(){
      console.log(this === window); // true가 출력됨. 현재 this는 window
      this.printData(); // 에러가 난다. bind로 감싸면 된다. 
    }.bind(this), 200);
  },
  printData(){
    console.log("hi");
  }
}

myObj.runTimeout();
```
```js
const myObj = {
  runTimeout() {
    wetTimeout(() => {
      console.log(this === window); // true가 출력됨. 현재 this는 window
      this.printData(); // arrow는 컨텍스트를 유지하기때문에 에러가 나지 않는다.
    }, 200);
  },
  printData(){
    console.log("hi");
  }
}

myObj.runTimeout();
```

**Lexical this**
- Arrow function은 언제나 자신을 포함하는 `외부 scope에서 this를 계승` 받는다. 
- 다시 말해 Arrow function은 자신만의 this를 생성하지 않고 `자신을 포함하고 있는 컨텍스트로 부터 this를 계승 받는다.` 이를 Lexical this라 한다. 
- Arrow function은 Solution 3의 Syntactic sugar이다.

## arrow function을 사용하면 안되는 상황
1. 메소드 정의 시 arrow function 사용을 피해야한다.
보통 객체의 메소드에서 arrow function을 사용하게 되면, 외부 스코프에서 this를 계승하기 때문에 전역객체에 바인딩될 경우가 있고, 이는 바람직하지 않다. 메소드 정의시 사용하고 싶다면, es6의 축약 메소드로 표현하면 된다.
```js
const obj = {
  name: 'Lee',
  sayHi() { // === sayHi: function() {
    console.log("hello ${this.name}");
  }
}
obj.sayHi(); 
```

2. prototype 메소드를 할당하는 경우에도 바람직하지 않다.
3. 생성자 함수
- 생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용한다. 
- 하지만 Arrow Function은 prototype 프로퍼티를 가지고 있지 않다.
```js
const Foo = () => {};
// Arrow Function은 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false
const foo = new Foo(); // TypeError: Foo is not a constructor
```

4. addEventListener 함수의 콜백함수
- addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 `상위 컨택스트`를 가리킨다.
- 이는 바람직하지 않다기 보다는, 사용전에 실행컨텍스트를 이해하고 있어야 혼란을 피할 수 있다. 
```js
var button = document.getElementById('myButton');  
button.addEventListener('click', () => {  
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
```

## 기본 매개변수 default paramaters
```js
// 패턴1 _ 매개변수를 넘길 때 default화 해서 넘길 수 있다.
function sum(value, size = 1) {
  return value * size;
}

// 패턴2_ 매개변수를 넘길 때 key,value 형태로 넘길 수 있다.
function sum(value, size = {value:1}) {
  return value * size;
}
console.log(sum(3,10))
```

