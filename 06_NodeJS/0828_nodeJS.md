참고 : [김정환 블로그](http://blog.jeonghwan.net/2016/08/10/nvm.html)
Promise참고 1 : [Promise](http://programmingsummaries.tistory.com/325)
Promise참고 2 : [ES6_제너레이터](http://meetup.toast.com/posts/73)
# nodeJS 1번째 강의

## 깃헙이 제공하는 API를 통해서 실습할 예정
- 깃헙이 제공하는 REST API 
  - https://developer.github.com/v3/

##postman 사용
<img src = "/capture/01.png">
<img src = "/capture/03.png">
<img src = "/capture/04.png">
<img src = "/capture/05.png">
http프로토콜 안에 내장되어있는 기본적인 방법
- https://아이디:비밀번호@api.github.com/user
- 서비스의 rest api를 이용해서, 정보를 받을 수 있고, postman을 이용해서 테스트할 수 있다.
- Authorization : Basic Auth, No Auth, Digest Auth, `Bearer` (Bearer을 많이 사용한다.)

- LTS : Long term Service
- nvm : node version manager

### nvm 설치하기
https://github.com/creationix/nvm

- 버전을 여러개 쓸 수 있다.
- `nvm alias default 8.4`
  - default라는 이름으로 8.4버전을 기본으로 셋팅하는 것이다.


## Node.js REPL (Read Eval Print Loop)
터미널에서 node를 사용하고 싶을때 

### require
nodejs에 내장되어있는 모듈을 사용할때 require함수를 사용해서 불러온다.

- 서버를 만들거나
- 파일관리를 하거나
- 운영체제에 접근할때
등등 목적에 따라 맞는 모듈의 종류가 많다.

- [path 모듈](https://nodejs.org/dist/latest-v8.x/docs/api/path.html)
  - 운영체제에 상관없이 경로를 편집하고 처리할 수 있는 모듈 (윈도우와 맥의 슬래시는 다르다..)


##javascript runtime
JavaScript 런타임은 JS를 구동하기 위해 필요한 실행 환경
- nodeJS는 V8자바스크립트 엔진 위해서 움직인다.
- 자바스크립트 구동하는 부분만 엔진에서 분리해서 다른 환경에서도 쓰일 수 있도록 한 엔진이 V8 자바스크립트 엔진

## V8 JS Engin
- JIT(Just-In-Time) compilation
- Code Optimization
- Used in
  - Google Chrome
  - Node.js
  - MongoDB
  - ...

## Non-blocking I/O
- Blocking I/O는 스레드가 입력/출력이 `완료될 때까지 기다렸다가` 다음 코드를 실행
  - 중간에 멈춘다.
- Non-blocking I/O는 스레드가 입력/출력을 기다리지 않고 코드를 계속 실행
   - 
- I/O 성능 향상 & 복잡한 코드

## 실습 : 모듈 만들고, 활용해보기
- require로 불러올 때 파일 이름에서 `.js`생략이 가능하다.
- node.js는 모듈마다 스코프가 있다!! 웹의 전역스코프와 다르다.

### 모듈 스코프
```js
// mod1.js
var evil = 1;
module.exports // 다른 모듈에서 사용하기위해서는 무조건 exports안에 있어서 내보내야한다.

// mod2.js
evil ; // 에러.
```

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

### .then
- 들여쓰기를 방지할 수 있다.
- Promise의 가장 큰 장점은 `가독성`

### axios
- https://www.npmjs.com/package/axios

### whatwg-fetch
https://www.npmjs.com/package/whatwg-fetch


## Async / Await


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