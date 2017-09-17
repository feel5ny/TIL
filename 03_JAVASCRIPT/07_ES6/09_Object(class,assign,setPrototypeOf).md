# 객체
1. class를 통한 객체생성
2. Object assign으로 JS객체만들기
3. Object assign으로 Immutable 객체 만들기
4. Object setPrototypeOf로 객체만들기
5. Object setPrototypeOf로 객체간 prototype chain생성하기

## 1. class를 통한 객체 생성
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

## 2. Object assign으로 JS객체 만들기
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

## 3. Object assign으로 Immutable 객체 만들기
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

## 4. Object setPrototypeOf로 객체만들기
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

## 5. Object setPrototypeOf로 객체간 `prototype chain`생성하기 (다 듣지 않음)

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