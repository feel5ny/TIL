# 객체
1. class를 통한 객체생성
2. Object assign으로 JS객체만들기
3. Object assign으로 Immutable 객체 만들기
4. Object setPrototypeOf로 객체만들기
5. Object setPrototypeOf로 객체간 prototype chain생성하기

# 1. class를 통한 객체 생성
효율적인 객체를 프로토타입에 넣으면서, 객체를 generate를 하는 
```js
function Health(name){
  this.name = name;
}

Health.prototype.showHealth = function()[
  console.log( this.name + "님 안녕하세요 ");
]
const h = new Health("crong");
h.showHealth()
```
위의 코드를 똑같이 class형태로 만든 것
```js
class Health {
  constructor(name, lastTime){ // constructor가 명시적으로 있어서, new하고 따로 하지 않아도 된다.
    this.name = name;
    this.lastTime = lastTime;
  }
  
  showHealth() { // 내부적으로 프로토타입의 메서도르 처리된다고 생각하면 된다.
    console.log("안녕하세요" + this.name);
  }
}

const myHealth = new Health("crong");
myHealth.showHealth();

```
- 모듈화되어 있어서 가독성이 좋고, 협업면에서 효율성이 높다. 

## constructor(메소드)
- 인스턴스를 생성하고 초기화하기 위한 특수한 메소드이다.
- constructor메소드는 클래스 내에 한 개만 존재할 수 있으며 2개 이상일 경우 문법에러
- 멤버 변수는 선언할 수 없으므로, constructor내부에 선언과 초기화를 해야한다.
- constructor 내부에서 선언한 멤버 변수는 this에 바인딩되어있으므로 언제나 `public`이다.

## getter, setter
### getter
- getter는 어떤 프로퍼티에 `접근`할 때마다 프로퍼티를 조작하는 행위가 필요할 때 사용한다.
- 반드시 무언가를 반환하여야한다.

### setter
- setter는 어떤 프로퍼티에 `값을 할당`할 때마다 프로퍼티를 조작하는 행위가 필요할 때 사용한다.

## 정적 메소드 (Static method)
- `static` 키워드는 클래스의 정적(static) 메소드를 정의한다. 
- 정적 메소드는 클래스의 인스턴스화(instantiating)없이 호출하며 클래스의 인스턴스로 호출할 수 없다.  (이유는 아래 이미지) `= 객체로 만들기 전에도 사용가능하다.`
  <img src="01_class_staticmethod.jpg">
- 정적 메소드는 `어플리케이션을 위한 유틸리티(utility)` 함수를 생성하는데 주로 사용된다.

## 클래스 상속
상속은 코드 재사용의 관점에서 매우 유용하다. 새롭게 정의할 클래스가 기존에 있는 클래스와 매우 유사하다면, 동일한 구현은 상속을 통해 그대로 사용하고 다른 점만 구현하면 된다. 코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있기 때문에 매우 중요하다.

### 1. extends 키워드
- extends 키워드는 부모 클래스(Base class)를 상속하는 `자식 클래스(Sub class)의 생성을 위해` 클래스 선언에 사용된다.
- animal > human > korean 


### 2. super 키워드
- super 키워드는 부모 클래스의 `프로퍼티를 참조(Reference)할 때` 또는 `부모 클래스의 constructor를 호출`할 때 사용한다.

### 3. static 메소드와 prototype메소드의 상속
```js
class Parent {}

class Child extends Parent {}

console.log(Child.__proto__ === Parent); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true
```
<img src = "class-prototype-relation.png">

프로토타입 체인에 의해서 부모 클래스의 정적 메소드(static method)도 상속된다.

<img src = "02_extens_super.jpg">

# 2. Object assign으로 JS객체 만들기
```js
// Syntax
Object.assign(target, ...sources)
```
```js
//Object create 메서드.
const healthObj = {
  showHealth : function() {
    console.log("오늘 운동시간 :" + this.healthTime)
  }
}
const myHealth = Object.create(healthObj) 
// es5
// create : new를 사용해서 만들지 말고 새로운 생성방법
myHealth.healthTime = "11:20";
myHealth.name = "crong";

console.log(myHealth)
```
- 일일히 프로퍼티마다 값을 넣어줘야한다는 단점이 있다.

```js
//Object assign 메서드.
const healthObj = {
  showHealth : function() {
    console.log("오늘 운동시간 :" + this.healthTime)
  }
}
const myHealth = Object.assign(Object.create(healthObj), {
  healthTime : "11:20",
  name : "crong"
}) 
// 두번째 인자로 json형태의 객체를 한번에 넣을 수 있다.

console.log(myHealth)
```

# 3. Object assign으로 Immutable 객체 만들기
- Object assign은 새로운 객체를 만드는 방법이기도 하다.

```js
const previousObj = {
  name : "crong",
  lastTime: "11:20"
}

const myHealth = Object.assign({}, previousObj, {
  "lastTime" : "12:30"
}) // 3번째 인자가 두번째 인자를 덮어쓴다. 이는, 덮어쓸 요소가 없을 경우는 이전 요소가 유지되고, 덮어쓸 요소가 있으면 덮어쓰이게 된다.
console.log(myHealth)
```

```js
const previousObj = {
  name : "crong",
  lastTime: "11:20"
}

const myHealth = Object.assign({}, previousObj, {}) 
console.log(myHealth === previousObj) // false
console.log(myHealth.name === previousObj.name) // true
```
- 위의 예제를 보면 myHealth에 previousObj를 할당하기 때문에 같다고 생각할 수 있지만 실제로는 같지 않다.
- 즉, 할당시 같은 곳이 참조되는 것이 아니라 `복제`가 되는 개념이다.
- 이를 활용하면 객체를 쓸 때 카피해서 새로운 객체를 반환할 때 유용하게 사용이 가능하다.
  - 각자의 value값은 같다.
  - React에서 이 이론이 많이 사용된다.

# 4. Object setPrototypeOf로 객체만들기
```js
//Object assign 메서드.
const healthObj = {
  showHealth : function() {
    console.log("오늘 운동시간 :" + this.healthTime)
  },
  setHealth : function(newTime) {
    this.healthTime = newTime;
  }
}
// const myHealth =  {
//   healthTime : "11:20",
//   name : "crong"
// }

const newobj = Object.setPrototypeOf(myHealth, healthObj) 
// myHealth객체에 프로토타입으로 두번째 인자를 넣어달라는 뜻이다.
// Object assign과 유사한 형태이다.
console.log(newobj)
```
[mdn 참고](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
- `_`를 사용하는 것은 private한 객체임을 표시하는 것도 있으므로 사용하는걸 자제한다.
- 

# 5. Object setPrototypeOf로 객체간 `prototype chain`생성하기 (다 듣지 않음)

```js
const healthObj = {
  showHealth : function() {
    console.log("오늘 운동시간 :" + this.healthTime)
  },
  setHealth : function(newTime) {
    this.healthTime = newTime;
  }
}

const healthChildObj = {
  getAge : funcition(){
    return this.age;
  }
}
const childObj = Object.setPrototypeOf({
  age : 22
}, healthChildOvj)
console.log(newobj)
```