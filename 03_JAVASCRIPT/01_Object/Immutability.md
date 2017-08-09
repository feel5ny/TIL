## 예상대로 값이 변경되지 않고 출력되었을 때

```js
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim
```
myName은 string 타입이며, 이는 변경 불가능한 상태가 됐다는 의미이다. 때문에 myName에는 원래의 값이 출력되었다.<br>

```js
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim
```
myName 자체에 객체를 할당하였다. 이는 객체타입이라는 것을 의미하고, 변경이 가능하다는 뜻이다. <br>

> 변경 불가능한 상태는 객체에서만 가능하므로, 변수에 할당 할때 신경써서 확인하자.

## 불변데이터패턴
하나의 객체를 여러 변수가 참조할 경우 객체를 변경하고나면 모든 변수들이 변경된다. 이를 방지하기 위해서는 객체를 불변객체로 만드는 방법인데,<br>
다른 객체의 변경을 방지하면서 <br>
객체의 변경이 필요한 경우에는<br>
참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경한다.

### 객체의 방어적 복사_defensive copy
`Object.assign`
Object.assign은 타깃 객체로 소스 객체의 프로퍼티를 복사한다. 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타깃객체의 프로퍼티들은 / 소스 객체의 프로퍼티로 덮어쓰게 된다. 리턴값으로 타깃 객체를 반환한다.<br>
ES6에서 추가된 메소드이다.
<img src="asset/Object_assign.jpeg">

```js
// Syntax
Object.assign(target, ...sources)
```

```js
// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
```


### 불변객체화를 통한 객체 변경 방지
`Object.freeze`

