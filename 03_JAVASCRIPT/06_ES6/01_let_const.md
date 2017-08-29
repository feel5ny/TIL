# ES5에서 개선이 필요했던 점들
- ES5가 대응하는 디바이스가 많기 때문에, ES6로 작업 후 Babel을 이용해서 변환 후에 사용한다.
- ES6의 호환성 : https://kangax.github.io/compat-table/es6/

## let
1. 중복선언 안됨
2. 호이스팅
- 선언단계와 초기화 단계 사이에 일시적 사각지대가 있는데, 초기화 이전에 변수를 호출할 경우 TDZ에 빠져있는 상태라 찾을 수 없어서 Error를 낸다. (TDZ:Temporal Dead Zone)
3. 클로저
- ES5에서 따로 클로저화 시켜주는 작업을 ES6에서는 var를 let으로 바꾸어 블록레벨스코프화 시켜 해결한다. 
4. 전역 객체화
- 윈도우에서 전역객체는 `window`, Node.js에서는 `global`인데, let으로 선언한 변수는, `window.변수명`으로 접근 불가능하다. let 전역변수는 보이지 않는 개념적인 블럭 내에 존재하기 때문이다.

## const
1. 선언과 초기화
- const는 재할당이 금지된다. (참조변경을 금지한다.)
> 협업시 혼선을 막기위해, 재할당을 할 필요 없는 변수를 const로 선언하는 경우도 있다. 

> !! 보통은 대문자표기법을(HOME_NAME) 사용하여 협업자들에게 상수임을 명시했는데, (코딩컨벤션) const로 하면 구지 네이밍을 싱경쓰지 않아도 된다. 
- 반드시 선언과 동시에 초기화가 이루어져야한다. 
  - 즉, 보통 `var`를 이용하여 선언,초기화시 `undefined`가 할당되는데, const는 `undefined`가 할당되지 않고 문법 error를 추력한다.
- 블록레벨스코프

2. 상수 (중요!)
- 가독성을 위해 좋다.
- 상수를 적절한 네이밍으로 선언하면 가독성과 유지보수성이 높아진다.
```js
// Low readability
if (x > 10) {
}

// Better!
const MAXROWS = 10;
if (x > MAXROWS) {
}
```

3. const와 객체
- const 변수의 값이 객체인 경우, 참조의 변경을 금지한다.
- 객체의 프로퍼티는 보호되지 않는다. 즉, 객체의 내용은 변경가능하다. 
- 예를 들어, 배열타입에 요소들을 추가하는 것은 가능하다.   
> 객체타입 변수선언에는 const를 사용하는 것이 좋다.
```js
const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.

// 프로퍼티 값의 재할당은 허용된다!
user.name = 'Kim';

console.log(user); // { name: 'Kim', address: { city: 'Seoul' } }
```


## var? let? const?
- ES6를 사용한다면 var키워드 사용안해도됨.
- 변경이 발생하지 않는 기본자료형 변수와 객체형 변수에는 `const`를 사용
- 재할당이 필요한 기본자료형 변수에는 `let`

즉, 정리하자면!! 전략 코딩법!!
1. const를 기본으로 전체를 사용한다.
2. 변경이 될 수 있는 변수 let을 사용한다.
3. var는 사용하지 않는다.

## immutable array를 어떻게 만들지?
에디터에서 글을 쓸때, 임시저장을 하곤하는데, 뒤로가기나 앞으로가기로 수정을 하고 싶을때, 그때그때 저장되어있던 데이터를 보고싶어한다. 
- const를 통해 원본 배열을 불변화 한다.
- 배열에 추가하거나 삭제하거나 변경은 가능하다.
```js
const list =["apple","orange","watermelon"];
list2 = [].concat(list,"banana");
console.log(list,list2);
```


## ES6 String의 새로운 메서드

1. `startWith()`
2. `endsWith()`
3. `includes()`
> 모두 불린값으로 반환

```js
let str ="hello world~ ^^ ~~";
let matchstr = "hello";
console.log(str.startsWith(matchstr)); // 불린값
console.log(str.endsWith(matchstr));
console.log(str.includes("^^"));
```
