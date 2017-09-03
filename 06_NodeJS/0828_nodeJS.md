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

## Event-driven Programming
- 파일 읽기가 완료되었을 때 파일 시스템에서 콜백 함수를 호출하는데, 파일 시스템이 이벤트와 함께 호출하는 방식이면, 이벤트 기반 입출력 모델이라고 부른다. Event driven I/O
- 프로그램의 흐름이 외부 요인에 의해 일어나는 사건에 의해 결정되는 프로그래밍 양식
- 마우스 입력, 키보드 입력, 다른프로그램/컴퓨터로부터의 통신

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

## 동시성모델
프로그램이 `생애 주기가 겹치는` 여러 실행 과정을 통해 실행된다 하더라도 `프로그램의 결과에는 영향을 미치지 않는 성질`
- 생애 주기가 겹치는 여러 실행 과정이 자원을 공유할 때` 어떻게 충돌이 생기지 않도록 할 것인가?`

### thread
- 코드 실행의 가장 작은 단위
- 프로그램은 하나 이상의 스레드로 이루어짐
- CPU 코어 하나는 한 번에 하나의 스레드를 실행

## 동시성을 위한 도구
- 운영체제 차원의 도구 : Process , Thread, Mutex
- 언어 차원의 도구 : Python - asyncion, Go-goroutine, Erlang-actor, JavaScript - 


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

## Promise
비동기 작업의 `결과`를 담는 `객체`
`Promise.new`
`Promise.all`
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



### axios
- https://www.npmjs.com/package/axios

### whatwg-fetch
https://www.npmjs.com/package/whatwg-fetch


## Async / Await
- 
- 

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