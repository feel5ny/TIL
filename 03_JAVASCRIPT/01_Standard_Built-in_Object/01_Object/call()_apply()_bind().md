## 개요 
[출처](http://webclub.tistory.com/584)<br>

자바스크립트에서 상속은 프로토타입을 통해 이루어지기 때문에 객체의 상위타입 생성자를 호출하지 않아도 됩니다.

- `상위 타입의 생성자를 하위 타입의 생성자에서 호출`하려면 자바스크립트의 동작 방식에 대해 이해하고 이를 활용해야 합니다.

함수를 호출할 때 다른 this 값을 사용하도록 만드는 `call()` 과 `apply()` 메소드를 이용할 수 있습니다.

생성자 훔치기(constructor stealing) 가 하는 일도 이와 똑같습니다.

하위타입 생성자에서 call() 이나 apply() 를 사용하며 새로 생성된 객체를 인수로 전달하면 상위타입 생성자를 호출할 수 있습니다.

- 이들 메서드는 모두 소유자인 함수를 호출하면서 this를 넘기는데, 결과적으로는 함수 내부에서 this 객체의 값을 바꾸는 것이나 마찬가지이다.

## call()
this가 첫번째 매개변수인 점은 똑같지만 call()을 사용할 때는 반드시 다음 예제와 같이 `매개변수를 각각 나열해야한다.`
```js
function sum(num1, num2){
  return num1 + num2;
}
function callSum(num1,num2){
  return sum.call(this, num1, num2);
}
alert(callSum(10,10)); //20
```

## apply()
apply 메서드는 매개변수로 소유자 함수에 넘길 this와 매개변수 배열을 받습니다. 두번째 매개변수는 Array의 인스턴스일 수도 있고, arguments객체일 수도 있다.
```js
function sum(num1, num2){
  return num1 + num2;
}
function callSum1(num1, num2){
  return sum.apply(this, arguments);
}
function callSum2(num1, num2){
  return sum.apply(this, [num1, num2]);
}
alert(callSum1(10,10));
alert(callSum1(10,10));
```


> 둘중에 어떤거 쓸지에 대해서는 개발자 재량이다. 매개변수를 각각 나열해야하는 방법이 좋을지, 배열자체를 넣는 방법이 좋을지는 상황에 따라서 판단해서 사용하면된다.

## 사용하는 진짜 목적 : this를 바꾸는 데 있다.
즉, 스코프를 바꾼다. 

## bind() (ECMAScript5)
이 메서드는 새 함수 인스턴스를 만드는데 그 this는 bind()에 전달된 값입니다. 
```js
window.color="red";
var o ={color:"blue"};

function sayColor(){
  alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor(); //blue
```