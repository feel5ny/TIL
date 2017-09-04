map & WeakMap
- Array -> set, weakset
- Object -> map, weakmap
- map은 key/value 구조
- 객체에 대한 부연적인 설명들, 정보들을 같이 보관한다.

## WeakMap
WeakMap 객체는 키가 약하게 참조되는 키/값 쌍의 컬렉션이다.
```js
let wm = new WeakMap();
let myfun = function(){};
//이 함수가 얼마나 실행됐찌?를 알려고 할 때.

wm.set(myfun, 0);

console.log(wm)
```

## WeakMap의 메서드
1. delete
2. get
3. has
4. set

## WeakMap 클래스 인스턴스 변수 보호하기

프라이빗한 변수를 선언하는 방법
```js
const wm = new WeakMap();
function Area(height,width){
  wm.set(this, {height,widht});
}
```