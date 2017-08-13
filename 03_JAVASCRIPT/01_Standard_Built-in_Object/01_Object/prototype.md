## 프로토타입 객체
(나영정리)
1. 참조타입의 프로퍼티들을 인스턴스가 갖고 있는 것.
2. 참조타입의 인스턴스들은 참조타입의 특성들을 갖고 있고, 생성자함수의 인스턴스들은 추가하지 않는 이상 constructor, [[Prototype]] 프로퍼티만 존재한다.

## method를 생성자 함수에서가 아니라 prototype 객체에 할당 할 경우.
가독성을 위해 프로토타입에 추가하는 코드는 들여쓰기 해준다. 
```js
// 부모 클래스 
function MyParent() { 
  this.property1 = '문자열 데이터'; 
  console.log('MyParent()'); 
} 
  MyParent.prototype.info = function () { 
    console.log('property1 = ' + this.property1); 
  };  //
```