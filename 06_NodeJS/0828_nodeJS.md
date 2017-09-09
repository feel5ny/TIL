- 참고 : [김정환 블로그](http://blog.jeonghwan.net/2016/08/10/nvm.html)
- Promise참고 1 : [Promise](http://programmingsummaries.tistory.com/325)
- Promise참고 2 : [ES6_제너레이터](http://meetup.toast.com/posts/73)

# nodeJS 1일차
1. REST API 실습
2. Node.js
3. 비동기 자바스크립트


<hr>

## REST API 실습
1. Postman<br>
REST API를 시험해볼 수 있는 도구

<br>

< 사용법 > 출처 : [TOAST](http://meetup.toast.com/posts/107)
1. query string이 포함된 GET방식의 호출
- key값과 value값을 입력하고 보낼 경우, 호출결과를 body탭에서 확인할 수 있다. 
- 예) 해당 게시물의 데이터를 보고 싶을때, data-id를 key값으로, id의 값 (1번게시물이라면 1)을 value값에 넣어서 send.

2. JSON이 사용된 POST방식의 호출
- Body 영역에 JSON Data를 입력한다.
<img src="img/3.jpg">

- JSON(application/json)를 선택하면 Header에 Content-Type이 application/json으로 자동추가되고, API 호출결과는 하단 Body탭에 출력된다. 
<img src="img/4.jpg">
<br>

<활용방법>
1. Collections
북마크 기능이다.
<img src="img/5.jpg">
<img src="img/6.jpg">

- Requets name
어떤 역할을 하는 API인지 입력한다.

- Create new collection
API를 그룹화하는 카테고리로 활용합니다. 기존에 등록한 Collection이 있는 경우에는 선택창이 뜨지만, 새로 등록하는 경우에는 등록할 Collection명을 적습니다. Collection을 development / production으로 나눌 필요는 없습니다. 예를 들어 '회원 API', '콘텐츠 API' 등 업무별로 저장.

2. Code generate
다양한 언어별로 해당 API를 호출하는 소스코드를 생성해준다.

3. Manage environments
4. Interceptor

## 깃헙이 제공하는 API를 통해서 실습할 예정
- 깃헙이 제공하는 REST API 
  - https://developer.github.com/v3/

## postman 사용 
<img src = "img/01.png">
<img src = "img/03.png">

http프로토콜 안에 내장되어있는 기본적인 방법
- https://아이디:비밀번호@api.github.com/user
- 서비스의 rest api를 이용해서, 정보를 받을 수 있고, postman을 이용해서 테스트할 수 있다.
- Authorization : Basic Auth, No Auth, Digest Auth, `Bearer` (Bearer을 많이 사용한다.)

## Node.js
- 자바스크립트를 이용해서 서버를 만들 수 있는 개발도구이다.
- Node.js는 노드라는 원래의 이름 뒤에 `자바스크립트를 사용한다는 의미`에서 js를 붙인 형태이다.
- Node.js를 많이 사용하는 이유
노도는 2009년에 라이언달이 만들었는데, 그 당시에는 웹서버에 파일을 업로드할 때, `업로드가 완료되기 전까지 웹 서버에서 데이터를 조회한다거나 하는 등의 다른 작업을 할 수 없었다.` 이 문제를 해결하기 위해 새로운 방식의 서버 개발 도구를 만들기 시작했는데, 그것이 노드이다.
  - 웹 브라우저를 통해 내 PC에 있는 문서 파일 하나를 업로드하고 싶다면 먼저 웹 서버에 업로드를 요청해야 한다. 이때 웹 서버에느 ㄴ파일 업로드가 기능을 담당하는 핸들러를 하나 만들어 둔다. 
  - 파일의 크기가 크다면 파일을 업로드하는데 1분이상의 시간이 걸릴 수 있다. 파일 업로드를 완료하기 전에 서버에 있는 다른 파일의 정보를 확인하거나 파일업로드가 어떻게 진행되고 있는지 요청하는 것이 불가능하기때문에, 업로드가 완료될 때까지 대기해아한다. 지금은 비동기처리로 해결하지만, 그 당시에는 웹 서버의 파일업로드 핸들러가 하나의 요청이 끝날 때까지 다른 요청을 대기시켜 응답 시간이 길어지거나, 서버에서 처리해야 하는 요청의 수가 증가하면 CPU나 메모리 사용량도 크게 증가하는 문제가 많이 발생했다. 

- 이런 문제를 해결하기 위해 만든 것이 Node. 요청을 동시에 처리할 수 있는 비동기 입출력(Non-Blocking IO) 방식을 적용했다.
- LTS : Long term Service

< 입문자들의 오해 > (출처:[velopert](https://velopert.com/133)) 
<br>
Node는 웹서버가 아니랍니다. Node 자체로는 아무것도 하지 않습니다 – 아파치 웹서버처럼 HTML 파일 경로를 지정해주고 서버를 열고 그런 설정이 없습니다. 단, HTTP 서버를 직접 작성해야합니다 (일부 라이브러리의 도움을 받으면서). Node.js 는 그저 코드를 실행할 수 있는 하나의 방법에 불과한 그저 `JavasScript 런타임`일 뿐입니다.

< 언제 node.js를 사용할까?> <br>

다음과 같은 분야에 Node.js 가 사용된다면 뛰어난 효율성을 달성 할 수 있습니다.
* 입출력이 잦은 어플리케이션
* 데이터 스트리밍 어플리케이션
* 데이터를 실시간으로 다루는 어플리케이션
* JSON API 기반 어플리케이션
* 싱글페이지 어플리케이션




[출처](http://118k.tistory.com/204) <br>
[LTS(Long Term Supported) 버전]
- LTS 버전은 서버환경에서 장기적으로 안정적인 지원을 제공하는 버전
- 짝수 버전이 LTS 버전(현재 4.X)
- 안정성과 보안성에 초점을 두어 개발

[Stable 버전]
- Stable 버전은 잦은 업데이트를 진행
- 홀수 버전(현재 5.X)
- 추가기능 개발과 기존 API의 기능 개선에 우선한다. 
* 서버운영을 위해서는 LTS 버전을 설치하고, 개발및 테스트를 위해서는 Stable 버전을 설치해서 처리하면 될 것 같다.

- nvm : node version manager

## nvm 설치하기
https://github.com/creationix/nvm

- 버전을 여러개 쓸 수 있다.
- `nvm alias default 8.4`
  - default라는 이름으로 8.4버전을 기본으로 셋팅하는 것이다.


## Node.js REPL (Read Eval Print Loop)
터미널에서 node를 사용하고 싶을때 
- Read – 유저의 값을 입력 받아 JavaScript 데이터 구조로 메모리에 저장합니다.
- Eval – 데이터를 처리`(Evaluate)` 합니다.
- Print – 결과값을 출력합니다.
- Loop – Read, Eval, Print 를 유저가 Ctrl+C를 두번 눌러 종료할때까지 반복합니다.

### REPL
- Ctrl+C – 현재 명령어를 종료합니다.
- Ctrl+C (2번)  – Node REPL 을 종료합니다.
- Ctrl+D – Node REPL을 종료합니다.
- 위/아래 키 – 명령어 히스토리를 탐색하고 이전 - 명령어를 수정합니다.
- Tab – 현재 입력란에 쓴 값으로 시작하는 명령어 / 변수 목록을 확인합니다.
- .help – 모든 커맨드 목록을 확인합니다.
- .break – 멀티 라인 표현식 입력 도중 입력을 - 종료합니다.
- .clear – .break 와 같습니다.
- .save filename – 현재 Node REPL 세션을 - 파일로 저장합니다.
- .load filename – Node REPL 세션을 파일에서 불러옵니다.
## require
nodejs에 내장되어있는 모듈을 사용할때 require함수를 사용해서 불러온다.

- 서버를 만들거나
- 파일관리를 하거나
- 운영체제에 접근할때
등등 목적에 따라 맞는 모듈의 종류가 많다.

- [path 모듈](https://nodejs.org/dist/latest-v8.x/docs/api/path.html)
  - 운영체제에 상관없이 경로를 편집하고 처리할 수 있는 모듈 (윈도우와 맥의 슬래시는 다르다..)


## javascript runtime
JavaScript 런타임은 JS를 구동하기 위해 필요한 실행 환경
- nodeJS는 `V8자바스크립트 엔진 위해서 움직인다.`
- 자바스크립트 구동하는 부분만 엔진에서 분리해서 다른 환경에서도 쓰일 수 있도록 한 엔진이 V8 자바스크립트 엔진
- Chrome이 제공하는 웹 브라우저용 런타임
- Node.js가 제공하는 서버용 런타임
- MongoDB가 제공하는 데이터 처리용 런타임
- Photoshop이 제공하는 전용 런타임


## V8 JS Engin
- V8엔진에서는 노드가 동작할 수 있도록 만드 시스템구조(아키텍처)를 보여준다.
<img src="https://i.stack.imgur.com/fUhaP.png">

- JIT(Just-In-Time) compilation
- Code Optimization
- Used in
  - Google Chrome
  - Node.js
  - MongoDB
  - ...

## Event-driven Programming ***
- 파일 읽기가 완료되었을 때 파일 시스템에서 콜백 함수를 호출하는데, 파일 시스템이 이벤트와 함께 호출하는 방식이면, 이벤트 기반 입출력 모델이라고 부른다. Event driven I/O
- 비동기 방식으로 처리하기 위해 `서로 이벤트를 전달한다.`
- 이벤트는 한쪽에서 다른 쪽으로 알림 메시지를 보내는 것과 비슷하다. 즉, '지금 이 쪽의 상태는 이렇다'는 정보를 다른 쪽으로 보내는 것이다.
- 프로그램의 흐름이 외부 요인에 의해 일어나는 사건에 의해 결정되는 프로그래밍 양식
- `이벤트`는 한쪽에서 다른 쪽으로 어떤 일이 발생했음을 알려주는 것이다. 이때 다른 쪽에서 이 이벤트를 받고 싶다면 `이벤트리스너`를 등록할 수 있다. 이벤트 리스너는 특정 이벤트가 전달되었을 때 그 이벤트를 처리할 수 있도록 만들어 둔 것을 말한다.
- 마우스 입력, 키보드 입력, 다른프로그램/컴퓨터로부터의 통신
- 옵저버 패턴에 의해 작동된다.

```js
// DOM 이벤트 핸들러 등록 (웹 브라우저)
domElement.addEventListener('click', function(e) {
  e.stopPropagation()
  alert('hello')
})
// 서버도 똑같이 합니다.
// (단, 프레임워크를 쓸 때는 직접 이벤트를 다룰 일이 별로 없음)
// HTTP 응답 이벤트 핸들러 등록 (Node.js)
httpResponse.on('data', data => {
  console.log(data)
})
```
<img src ="img/08.png">
<img src ="img/10.jpg">
<img src ="img/11.png">
브라우저 환경

- node.js에는 events모듈과 [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) 클래스가 내장되어있다. 이를 사용하여 이벤트와 이벤트핸들러를 연동(bind) 시킬 수 있습니다.
```js
// events 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();
```

이벤트 핸들러와 이벤트를 연동시키는건 다음과 같습니다:
```js
// event와 EventHandler 를 연동(bind)
// eventName 은 임의로 설정 가능
eventEmitter.on('eventName', eventHandler);
```
프로그램안에서 이벤트를 발생시킬땐 다음 코드를 사용합니다:
```js
eventEmitter.emit('eventName');
```
EventEmitter객체에는 on()과 emit()메소드가 있다. 
- `on(event, listener)` : 이벤트가 전달될 객체에 이벤트 리스너를 설정하는 역할을 한다. 즉, 지정한 이벤트의 리스너를 추가한다. **등록한다.**
- `once(event, listener)` : 지정한 이벤트의 리스터를 추가하지만 한 번 실행한 후에는 자동으로 리스터가 제거된다.
- `removeListener(event, listener)` : 지정한 이벤트에 대한 리스너를 제거한다.
- `emit(event, listener)` : 이벤트를 다른쪽으로 전달하고 싶을 때 사용. 직접 만든 이벤트를 호출할때 사용한다.
이미 내부적으로 EventEmitter를 상속받도록 만들어져 있어서 메소드들을 바로 사용이 가능하다.

### 이벤트 핸들링 예제
1. 책 예제

<img src ="img/09.jpg">

```js
// tick과 콜백함수 bind시킴. 
process.on('tick',function(count){ // 2.리스너 등록
  console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function(){
  console.log('2초 후에 tick 이벤트 전달 시도함.');
  process.emit('tick',2); // 3. 등록한 이벤트 전달 , 4. 호출
},2000);
```
process는 전역객체이기 때문에 EventEmitter를 이미 내부적으로 상속받을 수 있도록 만들어져서 따로 생성자함수를 사용하지 않았다.

2. velopert.log 블로그 예제

위에서 배운것을 토대로 이벤트를 다루는 예제를 작성해보도록 하겠습니다.
```js
// events 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
// EventEmitter는 events 모듈 안에 정의되어 있다.
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected(){
    console.log("Connection Successful");
    
    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit("data_received");
}

// connection 이벤트와 connectHandler 이벤트 핸들러(함수)를 연동(bind)
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function(){
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');
// 1. connection 이벤트가 발생하면서 "Connection Successful" 출력
// 2. connection 이벤트 마지막에서 data_received를 호출하였고, > data_received가 발생 > "Data_Received"가 출력
// 3. 하단의 "Program has ended" 출력
console.log("Program has ended");
```
출력물
```bash
$ node main.js
Connection Successful
Data Received
Program has ended
```
> [이벤트 핸들러 vs 이벤트 리스너 차이점](eventHandler_vs_eventListener.md)

## Non-blocking I/O
- Blocking I/O는 스레드가 입력/출력이 `완료될 때까지 기다렸다가` 다음 코드를 실행
  - 중간에 멈춘다.
- Non-blocking I/O는 스레드가 입력/출력을 기다리지 않고 코드를 계속 실행
- I/O 성능 향상 & 복잡한 코드
- 프로그램에서 해당 파일의 내용을 처리할 수 있는 시점이 되면 `콜백함수`가 호출된다. 프로그램에서는 파일 읽기 요청을 하기 전에 콜백 함수를 등록하는데, 파일 시스템은 파일 처리가 끝나면 자동으로 콜백 함수를 호출한다.
- **모든 콜백함수가 비동기인것은 아니다.**


## Node.js Module
- 노드에서 필요한 기능을 별도의 자바스크립트로 만든 후 필요할 때마다 불러올 수 있다.
- `CommonJS`표준스펙을 따른다.
  - `CommonJS`표준스펙 : 자바스크립트코드를 별도의 모듈 파일로 분리시키고 필요할 때 불러와 사용할 수 있는 방식을 정의해 둔 표준이다.

모듈이란?
- 메인이 되는 자바스크립트 파일의 일부 코드를 떼어 별도의 파일로 만들 수 있다.
- 예를 들어, 코드의 일부를 떼어 modue_1.js라는 이름의 파일로 저장한다면 이 파일이 모듈이다. 이 파일에 들어 있는 코드를 사용하고 싶다면 `rquire()함수로 무듈을 호출하면된다.` **이렇게 불러들인 파일은 자바스크립트 객체로 인식되며, 그 객체를 참조하여 파일에 넣어 둔 기능을 사용할 수 있다.**
- 여러개의 모듈을 합쳐서 하나의 `패키지`로 만들어 두면, 다른 프로그래머들도 npm을 이용하여 패키지를 설치할 수 있다.
- 마이크로소프트, 페이팔, 야후 같은 기업들이 노드를 사용하면서 안정성도 충분히 검증되었다.

## 실습 : 모듈 만들고, 활용해보기
- require로 불러올 때 파일 이름에서 `.js`생략이 가능하다.
- Node.js 내장모듈이 아닌 내가 만든 모듈은 경로를 지정해야한다.
- node.js는 모듈마다 스코프가 있다!! 웹의 전역스코프와 다르다.

### 모듈 스코프
```js
// mod1.js
var evil = 1;
module.exports // 다른 모듈에서 사용하기위해서는 무조건 exports안에 있어서 내보내야한다.

// mod2.js
evil ; // 에러.
```
## 자바스크립트의 전역 객체 자료형 
대표 3가지
1. console
콘솔 창에 결과를 보여주는 객체
  - dir(object) :
  자바스크립트 객체의 속성들을 출력합니다.
  - time(id) :
  실행 시간을 측정하기 위한 시작 시간을 기록합니다.
  - timeEnd(id) :
  실행 시간을 측정하기 위한 끝 시간을 기록합니다.

2. process
프로세스의 실행에 대한 정보를 다루는 객체

3. exports
모듈을 다루는 객체


## NPM
Node.js 패키지 관리도구 + 클라우드 패키지 저장소
(많이 사용하는 순)
- 의존 패키지 관리 : 우리가 보통 npm ~ 라고 하면서 패키지들을 설치함.
- 스크립트 실행. 
- 패키지 설정
- NPM에 패키지 배포
- `NOde.js 종합 작업 도구`
`npm init -y` : `-y`는 그냥 모든 질문에 예로 사용하는 것

### package.json
- 패키지 정보를 담고 있는 파일
- dependencies
- script에는 자주 사용하는 명령을 등록해 놓고 사용한다.
- `npm install --save ~~` 

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node index.js" // 자주사용하는 명령어(스크립트)를 등록하고 실행시킬 수 있다.
  },
```

## 동시성모델 ([참고자료](http://meetup.toast.com/posts/89), [나영정리](Asynchronous_JavaScript.md))
프로그램이 `생애 주기가 겹치는` 여러 실행 과정을 통해 실행된다 하더라도 `프로그램의 결과에는 영향을 미치지 않는 성질`
- 생애 주기가 겹치는 여러 실행 과정이 자원을 공유할 때` 어떻게 충돌이 생기지 않도록 할 것인가?`

### thread
- 코드 실행의 가장 작은 단위
- 프로그램은 하나 이상의 스레드로 이루어짐
- CPU 코어 하나는 한 번에 하나의 스레드를 실행

## 동시성을 위한 도구
- 운영체제 차원의 도구 : Process , Thread, Mutex
- 언어 차원의 도구 : Python - asyncion, Go-goroutine, Erlang-actor, JavaScript - 없다.

### 장점
- 프로그래머가 동시성에 대해 신경쓸 필요가 없어짐
- 프로그램 작성이 쉬워짐


### 단점
- CPU를 많이 쓰는 작업에 부적절
- 오래 걸리는 자바스크립트 코드가 실행되면 전체 프로그램에 영향을 미침
  - ex) 무한루프

### 단점을 해결하기 위한 전략
- 오래 걸리는 일은 외부에 위임하고 넘긴 뒤, 나중에 결과를 받아 처리하기
  - Database
  - Node.js - External libraries
  - Web browser - WebAssembly
- 긴 실행과정을 여러 개의 함수로 쪼개서 한 번의 함수 실행이 금방 끝나게 만들기

# Asynchronous JavaScript
## Promise
JavaScript에서 빈번히 사용되는 비동기 처리 모델은 요청을 병렬로 처리하여 다른 요청이 blocking(작업 중단)되는 않는 장점이 있지만 단점도 가지고 있는데 그것은 여러개의 콜백함수가 순서를 보장하기 위해 nesting되어 복잡도가 높아지는 Callback Hell이다.
- 비동기 작업의 `결과`를 담는 `객체`
  - `Promise.new`
  - `Promise.all`
- Callback Hell은 코드의 가독성을 나쁘게 하고 복잡도를 증가시켜 실수를 유발시킬 확률이 높아지며 [에러 처리가 곤란하다.](http://meetup.toast.com/posts/89)
이를 해결하기 위해 Promise가 등장했다. 
<br>
<Promise의 상태>
- `pending`
  - 비동기 처리가 아직 수행되지 않은 상태
  - resolve 또는 reject 함수가 아직 호출되지 않은 상태
- `fulfilled`
  - 비동기 처리가 수행된 상태 (성공)
  - resolve 함수가 호출된 상태
- `rejected`
  - 비동기 처리가 수행된 상태 (실패)
  - reject 함수가 호출된 상태
- `settled`
  - 비동기 처리가 수행된 상태 (성공 또는 실패)
  - resolve 또는 reject 함수가 호출된 상태

```js
// tenSec.js
module.exports = function tenSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, 10000)
  })
}
```
```js
// REPL
> const tenSec = require('./tenSec') // tenSec는 함수가 저장되어있다.
> const p = tenSec(1)
> p // 만든지 10초가 지나기 전
Promise {
  [pending], // [pending] : 아직 결과가 나오지 않았다라는 뜻이다.
  ...
> p // 만든지 10초가 지난 후
Promise {
  1,
  ...
```
Promise 참고하기 [참고1](https://developers.google.com/web/fundamentals/getting-started/primers/promises?hl=ko), [참고2](http://programmingsummaries.tistory.com/325)

### .then
- 들여쓰기를 방지할 수 있다.
- Promise의 가장 큰 장점은 `가독성`
- then 메소드는 두 개의 콜백 함수를 인자로 전달 받는다. 첫번째 함수는 성공(fulfilled) 시 호출되는 함수이고 두번째 함수는 실패(rejected) 시 호출된다.
- Promise는 XMLHttpRequest를 `순서대로 처리하거나 처리 직후 다른 처리를 해야 할 때 유용하게 사용된다.`
- then 메소드는 Promise를 반환한다. 따라서 이어지는 then 메소드를 chaining할 수 있다. 그리고 then 메소드의 콜백 함수가 반환하는 값은 자동으로 다음에 오는 then 또는 catch 메소드로 전달된다.


```js
// chaining.js
const tenSec = require('./tenSec')
tenSec('hello promise')
  .then(value => { // 첫번째 함수는 성공(fulfilled)시 호출되는 함수
    console.log(value)
    return 1 // 위 `.then`은 값이 1인 Promise를 반환함
  })
  .then(value => { // 두번째 함수는 실패시 호출되는 함수
    console.log(value)
    return tenSec('new promise') // Promise도 반환할 수 있음
  })
  .then(value => {
    console.log(value)
  })
  .then(() => {
    throw new Error('error in promise')
  })
  .catch(err => { // catch는 예외 발생 시 호출
    console.error(err)
  })
  .then(() => { // 에러 처리 이후에도 코드 실행 가능
    console.log('done')
  })
```
### Promise의 특징
- 이미 resolve된 Promise에도 콜백을 실행할 수 있다.
- `.then`에 넘겨진 콜백은 무조건 다음 루프에 실행됨
```js
> const resolved = Promise.resolve(1)
> resolved.then(v => console.log(v))

> (function() {
... Promise.resolve(1).then(v => console.log(v))
... console.log('done!')
... })()
/* 출력:
done!
1
*/
```

Promise.all
```js
// npm install --save request-promise
const rp = require('request-promise')
const apiUrl = 'https://api.github.com'
const option = {
  json: true,
  auth: {
    'user': 'username',
    'pass': 'password',
  },
  headers: {
    'User-Agent': 'request'
  }
}

const userPromise = rp.get(`${apiUrl}/user`, option)
const reposPromise = rp.get(`${apiUrl}/user/repos`, option)
const issuesPromise = rp.get(`${apiUrl}/issues`, option)

// 배열 내의 모든 Promise 객체가 완료되었을 때 resolve 되는 Promise를 만든다.
Promise.all([userPromise, reposPromise, issuesPromise])
  .then(([user, repos, issues]) => {
    console.log(`name: ${user.name}`)
    console.log('repos:')
    repos.forEach(repo => {
      console.log(repo.name)
    })
    console.log(`num of assigned issues: ${issues.length}`)
  })
```


### axios
- https://www.npmjs.com/package/axios


### whatwg-fetch
https://www.npmjs.com/package/whatwg-fetch



## Async / Await 
- async들이 나오기 전에는 setTimeout 함수를 이용한 방식을 통해 편법으로 sync를 맞추기도했다.
- Async / Await 를 사용하면, 기존 async 라이브러리나 Promise를 사용하지 않고도 비동기 콜백 지옥을 효과적으로 해결 할 수 있다. 물론 Async/Await 를 사용하려면 Promise 함수가 사용되기 때문에 사전에 Promise 사용 방법을 이해해야한다. [(참고)](http://proinlab.com/archives/2138)
- Promise를 사용하면 비동기 함수를 순차적으로 사용 할 수 있지만, `코드의 직관성이 떨어지고 함수가 많아지면 편집이 어려워진다.` 이를 해결하기 위해서 최신 문법에서는 Async 문법을 만들어서 코드를 효율적으로 짜는 것이 가능해졌다.
- ES2017에서 도입되어, 비동기식 코드를 동기식 코드처럼 쓸 수 있는 문법 제공
- Chrome 55, Node.js 8.0.0 부터 사용가능
- async function 안에서 반환된 값은 최종적으로 Promise 객체로 변환되어 반환된다.
- async function 안에서 쓸 수 있는 await 키워드는 현재 함수를 중단시키고 Promise 객체가 충족될 때까지 기다리지만, 스레드를 block 하지 않는다.
- 에러 처리는 동기식 코드처럼 try, catch 블록을 통해서 한다.

```js
function testPromise(callback) {
  return new Promise((resolve, reject) => {
    if (typeof callback === "function") {
      console.log("1. callback is function.");
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else if (typeof callback === "number") {
      console.log("1. callback number is " + callback);
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else {
      reject("1. callback is not a function, number");
    }
  });
}

async function testAsync(x) {
  var a = testPromise(20)
  var b = testPromise(30)

  return x + await a + await b
}

testAsync(50).then(result => console.log(result))
```
<img src ="img/14.jpg">
매우 간단한 것들이지만 setTimeout과는 다르게 promise와 async는 명확히 앞서 하던 일들이 끝나면 다음 일을 할 수 있도록 명시해줍니다. 

<다른예제>
```js
'use strict';

let asyncFunction1 = (message)=> new Promise((resolve)=> {
    setTimeout(()=> {
        console.log('fn-1', message);
        resolve('fn-1');
    }, 1000);
});

let asyncFunction2 = (message)=> new Promise((resolve)=> {
    setTimeout(()=> {
        console.log('fn-2', message);
        resolve('fn-2');
    }, 500);
});

async function asyncMain () {
    let data = await asyncFunction1('hello');
    console.log(data);
    data = await asyncFunction2('world');
    console.log(data);
}

asyncMain();
```
- Async 함수는 위와 같이 정의된다. await 문법은 Async 함수 안에서만 사용이 가능하고, async 내에서라고 해도 함수 안에 선언된 경우 사용이 불가하다.
- [(참고)](http://proinlab.com/archives/2138) Promise 개념을 이해한 후 Async / Await 문법을 잘 사용하면 순차적 작업이 필요한 단일 프로그램을 효율적으로 작성할 수 있다. 기존 다른 언어의 문법과 같이 await를 사용하면 순차적이고 직관적으로 보이게 되므로 익숙한 방식으로 비동기 문제 해결이 가능하다. 하지만 Node.js 7 버전이 아니라면 사용이 안되기 때문에 현재 LTS로 제공되는 6버전에서는 사용이 안되고, 라이브러리로 만들었을 때에는 오류를 발생시키는 원인이 될 수 있다. 또한 콜백 지옥은 피할 수 있지만, 기존 콜백의 병렬 프로세싱과 같은 장점 또한 사용이 안되므로 사용 목적에 따라 유연하게 사용해야한다. (무작정 사용하게 되면 성능 저하의 원인이 될 수 있다. 예를 들면, 웹 서버를 구축할 때 비동기 함수를 await로 사용한다면, 사용자가 동시에 접속하여 병목 현상이 발생 할 때 대응하기가 더 힘들다.) 

<hr>

## 번외) HTML5 history API
- 뒤로가기 자바스크립트 메소드가 있다.
- https://developer.mozilla.org/ko/docs/Web/API/History_API
- 접속할때마다 url이 스택 모드로 쌓인다.
- history객체를 통해 브라우저 히스토리 접근할 수 있다.

### pushState() 메소드
`pushState`를 통해서
- SPA에서 url을 추가할 수 있다.

### 트렐로는 어떻게 구현할까?
```js
/* 페이지 전환 코드 */
history.pushState({title: 'Hello', content: 'content'},null, 'push1')
// undefiend
// 페이지를 다시 크리는 이벤트 핸들러를.
```

### #! 해시뱅
https://blog.outsider.ne.kr/698
- SPA에서 pushSate 메서드를 통해 url을 추가할 수 있다고 했는데, 만약 새로고침할 경우 뒤의 url로 접근할 경우 접근이 안된다.
- 이때 헤시뱅/ 을 사용하면 접근이 가능!!!
my-home.com/#!/profile/about