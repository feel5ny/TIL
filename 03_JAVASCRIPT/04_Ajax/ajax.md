## 1. XMLHttpRequest 객체
### 1.1 XHR 사용법
open()메서드 호출
- 매개변수로 요청타입(get,post), 요청 URL, 요청을 비동기적으로 보낼지 나타내는 불리언 값을 받는다.
```js
xhr.open("get","example.php",true);
```
- open()자체는 요청을 보내는 것이 아니라 단순히 요청을 보낼 준비만 하는 것이다. 실제로 요청을 보낼 때는 다음과 같이 반드시 send() 메서드를 호출해야 한다.

send()메서드
- 매개변수로는 요청에 쓸 데이터만 받는다.
- 동기적이기 때문에 응답을 받을 때까지 실행을 멈추고 대기한다.
- 응답을 받으면 XHR 객체의 프로퍼티에 데이터가 채워진다.
  - `responseText` : 응답에 포함된 텍스트
  - `responseXML` : 
  - `status` : 응답의 HTTP 상태입니다.
  - `statusText` : HTTP 상태에 대한 설명

- 먼저 status 프로퍼티를 체크하여 응답이 성공적으로 반환되었는지 확인한다.
- statusText는 브라우저마다 딸라서 신뢰할 수 없으므로 status프로퍼티를 기준으로 판단하길 권한다.

`readyState`프로퍼티
- `0` (= `UNSENT`) : 초기화 전. open()메서드를 호출하기 전
- `1` (= `OPENED`) : 열림
- `2` (= `HEADERS_RECEIVED`) : 보냄
- `3` (= `LOADING`) : 수신 중
- `4` (= `DONE`) : 완료

- readyState값이 바뀔 때마다 `readystatechange` 이벤트가 발생한다. (즉, XMLHttpRequest.onreadystatechange는 XMLHttpRequest.readyState 프로퍼티가 변경될 때마다 호출되는 EventHandler이다.)

```js
// XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 콜백함수(이벤트 핸들러)를 호출한다.
req.onreadystatechange = function (e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (req.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(req.status == 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

## 2. XMLHttpRequest 레벨 2
## 3. 진행상태 이벤트
## 4. 소스간 자원 공유
## 5. 기타 크로스 도메인 테크닉
