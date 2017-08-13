# Override와 Overloading?
> 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 p.155 _ "다른 참조 타입과 마찬가지로 Date 타입의 toLocaleString(), toString(),valueOf() 메서드를 오버라이드합니다."

참고 : http://webclub.tistory.com/404 <br>

JavaScript `Method` Override & Overloading
생성자 함수(클래스)를 이용하여 상속을 하다보면 종종 물려받은 부모의 기능을 그대로 사용하지 않고 `재정의`해야할 경우가 발생할 수 있는데, 이 경우를 `메서드 오바라이드`라고 합니다.


## Method Override
메서드 오버라이드는 `자식 클래스에서` 부모 클래스의 기능을 `재정의`할 때 사용하는 기능입니다.
- 부모 클래스의 기능을 사용하지 않고 자식 클래스에서 구현한 기능을 사용하고 싶은 경우
- 부모 클래스의 기능을 자식 클래스에서 `확장`하고 싶은 경우

방법은 간단하다. 부모 클래스의 기능 중 재정의(오버라이드)하고자 하는 기능을 자식 클래스에서 `똑같은 이름`으로 만들어 주면 된다.
```js
// 부모 클래스 
function MyParent() {
  this.property1 = 'data1';
  console.log('MyParent');
} 
MyParent.prototype.method1 = function () { 
  console.log('property1 = ' + this.property1); 
}; 

// 자식 클래스 
function MyChild() { 
  console.log('MyChild'); 
} 

// 부모 클래스 상속하기 
MyChild.prototype = new MyParent(); 

// 생성자 설정 
MyChild.prototype.constructor = MyChild; 
/** 
* ------------------ 
* 메서드 오버라이드 
* ------------------ 
**/ 
MyChild.prototype.method1 = function () { 
  console.log('프로퍼티 1은 = ' + this.property1 + ' 입니다.'); 
}; 

// 자식 인스턴스 생성 
var child = new MyChild(); 

// 메서드 호출 
child.method1(); 

// 콘솔창 결과 
// MyParent 
// MyChild 
// 프로퍼티 1은 = data1입니다.
```

### 부모 클래스의 기능을 자식 클래스에서 확장
부모의 기능을 그대로 사용하면서 동시에 기능을 약간 추가하고 싶은 경우가 있다.
이때도 오버라이드를 활용할 수 있다.
```js
MyChild.prototype.부모메서드 = function ([param1, param2, ...]) { 
  부모클래스.prototype.부모메서드.call(this[,param1, param2, ...]) 
  // 추가 확장 구문 
  // 부모 메서드를 그대로 부른 후 Mychild(this)이름으로 넣는 방식
}
```

```js
// 부모 클래스 
function MyParent() { 
  this.property1 = '문자열 데이터'; 
  console.log('MyParent()'); 
} 
  MyParent.prototype.info = function () { 
    console.log('property1 = ' + this.property1); 
  };  //


// 자식 클래스 
function MyChild() { 
  console.log('MyChild()'); 
  this.property2 = '데이터이지롱'; 
} 

// 부모 클래스 상속 
MyChild.prototype = new MyParent(); 

// 생성자 설정 
MyChild.prototype.constructor = MyChild; 
/** 
* ----------------------------------- 
* 메서드 오버라이드를 활용한 기능 확장 
* ----------------------------------- 
**/ 

MyChild.prototype.info = function () { // 확장할 기능인 info() 메서드를 자식 클래스에서 오버라이드 한다. 
  MyParent.prototype.info.call(this); // call() 을 이용해 부모 클래스의 info()메서드를 호출한다. 
  console.log('프로퍼티 두번째는 ' + this.property2); // 확장하려는 기능을 추가한다. 
}; 

// 자식 인스턴스 생성 
var child1 = new MyChild(); 

// 자식 정보 출력 
child1.info(); // '프로퍼티 두번째는 데이터이지롱' 을 출력

```

## Method Overloading
> 프론트앤드 개발자를 위한 자바스크립트 프로그래밍 P.105 읽기
메서드 오버로딩(overloading)은 <br>
동일한 이름을 가진 여러 개의 메서드를 만든 후 <br>
매개변수 타입과 개수에 맞는 메서드가 자동으로 호출되는 기능을 말합니다.<br>
하지만 아쉽게도 자바스크립트는 문법적을 오버로딩을 제공하지 않습니다.
대신 생성자 함수를 이용해 일반 객체지향 언어의 클래스를 흉내 내듯이 오버로딩 또한 흉내낼 수 있습니다.

