```js
var MIN_USER_NAME_LENGTH = 2; // 이름 최소 길이

var elem = document.getElementById('username');
var msg  = document.getElementById('message');

function checkUserNameLength(n) {
  if(elem.value.length < n) {
    msg.innerHTML = '이름은 ' + n + '자 이상이어야 합니다';
  } else {
    msg.innerHTML = '';
  }
}

elem.addEventListener('blur', function() {
  checkUserNameLength(MIN_USER_NAME_LENGTH);
});
```
콜백함수를 사용해서 인자를 전달한다. (중요!)

# 1. Introduction

# 2. 동기식 처리 모델 vs 비동기식 처리 모델

# 3. 이벤트 루프(Event Loop)와 동시성(Concurrency)

# 4. 이벤트의 종류
## 4.1 UI Event
## 4.2 Keyboard Event
## 4.3 Mouse Event
## 4.4 Focus Event
## 4.5 Form Event
## 4.6 Clipboard Event

# 5. Event Binding
## 5.1 HTML Event Handler
## 5.2 전통적(Traditional) DOM Event Handler
## 5.3 DOM Level 2 Event Listener

# 6. 핸들러 함수 내부의 this
## 6.1 HTML Event Handler
## 6.2 전통적(Traditional) DOM Event Handler
## 6.3 DOM Level 2 Event Listener

# 7. Event Flow (이벤트의 흐름)

# 8. Event 객체
## 8.1 Event Property
### 8.1.1 Event.target
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    html, body { height: 100%; }
    div { height: 100%; }
  </style>
</head>
<body>
  <div>
    <button>배경색 변경</button>
  </div>
  <script>
    function bluify(e) {
      // this: 이벤트 리스너에 바인딩된 요소(div 요소)
      console.log('this: ', this);
      // target: 이벤트를 발생시킨 요소(button 요소 또는 div 요소)
      console.log('e.target:', e.target);
      // currentTarget: 이벤트 리스너에 바인딩된 요소(div 요소)
      console.log('e.currentTarget: ', e.currentTarget);

      // 언제나 true
      console.log(this === e.currentTarget);
      // currentTarget과 target이 같은 객체일 때 true
      console.log(this === e.target);

      // click 이벤트가 발생하면 이벤트를 발생시킨 요소(target)과는 상관없이 this(이벤트 리스너에 바인딩된 요소(div 요소))의 배경색이 변경된다.
      this.style.backgroundColor = '#A5D9F3';
    }
    
    // div 요소에 이벤트 핸들러가 바인딩되어 있다. 
    // 자식 요소인 button이 발생시킨 이벤트가 버블링되어 div 요소에도 전파된다.
    // 따라서 div 요소에 이벤트 핸들러가 바인딩되어 있으면 자식 요소인 button이 발생시킨 이벤트를 div 요소에서도 핸들링할 수 있다.
    document.querySelector('div').addEventListener('click', bluify);
  </script>
</body>
</html>
```
### 8.1.2 Event.currentTarget
### 8.1.3 Event.type
### 8.1.4 Event.cancelable
요소의 기본 동작을 취소시킬 수 있는지 여부(true/false)를 나타낸다.

### 8.1.5 Event.eventPhase

## 8.2 Event Method
### 8.2.1 Event.preventDefault()
### 8.2.2 Event.stopPropagation()

# 9. Event Delegation (이벤트 위임)
> 활용도 : 예) 메뉴를 클릭했을 때 클릭한 요소를 캐치해야할 때

# 10. 기본 동작의 변경
## 10.1 Event.preventDefault()
html이 form태그를 만든 이유
input요소를 나열하고 button중에 submit를 만들 수 있다. submit의 기본동적은 모든 input요소에 담긴 value를 sever에 넘긴다. 우리는 기본적으로 ajax를 이용해서 서버와 통신하기 때문에, form의 submit요소를 막아야한다. 막지 않으면 요청이 2번가기 때문에 충돌이 일어난다. (선생님 왈 타이핑) 때문의 위의 메서드로 `방어코드를 짜야한다.`

## 10.2 Event.stopPropagation()
어느 한 요소를 이용하여 이벤트를 처리한 후 이벤트가 부모 요소로 이벤트가 전파되는 것을 중단시키기 위한 메소드이다.
> 복잡한 이벤트를 사용할 때 ..

## 10.3 preventDefault & stopPropagation
같이 사용해야하는 상황도 있다.
`return false;`로 두가지 상황을 막는다.
- jquery에서는 `return`을 붙이면된다.

# Reference