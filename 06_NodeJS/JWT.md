> 참고 : [velopert.log](https://velopert.com/2350)

1. 토큰(Token)기반 인증에 대한 소개
2. JSON Web Token 소개 및 구조
3. Express.js 서버에서 JWT 기반 회원인증 시스템 구현하기

# 1. JWT : 토큰 기반 인증에 대한 소개
## 서론
1. Stateful 서버
  - Stateless 서버를 이해하려면 먼저 Stateful 서버가 무엇인지 알아야합니다. Stateful 서버는 클라이언트에게서 요청을 받을 때 마다, 클라이언트의 상태를 계속해서 유지하고, 이 정보를 서비스 제공에 이용합니다. 
  - `Stateful 서버`의 예제로는 세션을 유지하는 웹서버가 있습니다. 예를들어 유저가 로그인을 하면, 세션에 로그인이 되었다고 저장을 해 두고, 서비스를 제공 할 때에 그 데이터를 사용하지요. 여기서 이 세션은, 서버컴퓨터의 메모리에 담을 때도 있고, 데이터베이스 시스템에 담을 때도 있습니다. 
  - `Stateless 서버`는 반대로, 상태를 유지 하지 않습니다. 상태정보를 저장하지 않으면, 서버는 클라이언트측에서 들어오는 요청만으로만 작업을 처리합니다. 이렇게 상태가 없는 경우 클라이언트와 서버의 연결고리가 없기 때문에 `서버의 확장성 (Scalability) 이 높아집니다.` (?)

2. 모바일 어플리케이션에 적합하다.
  만약에 Android / iOS 모바일 어플리케이션을 개발 한다면, 안전한 API 를 만들기 위해선 쿠키같은 인증시스템은 이상적이지 않습니다. (쿠키 컨테이너를 사용해야하죠). 토큰 기반 인증을 도입한다면, 더욱 간단하게 이 번거로움을 해결 할 수 있습니다.

3. 인증정보를 다른 어플리케이션으로 전달
  대표적인 예제로는, OAuth 가 있습니다. 페이스북/구글 같은 소셜 계정들을 이용하여 다른 웹서비스에서도 로그인 할 수 있게 할 수 있습니다.

4. 보안
  토큰 기반 인증 시스템을 사용하여 어플리케이션의 보안을 높일 수 있습니다. 단, 이 토큰 기반 인증을 사용한다고 해서 무조건 해킹의 위험에서 벗어나는건 아닙니다.

## 토큰 기반 인증 시스템을 사용하는 서비스들
- 트위터 / 페이스북 / 깃헙 / 구글플러스

## 왜 토큰을 사용하게 돼었을까?
0. 토큰이란?
사용자 자격증명(아이디,패스워드 등)을 통해 인증이 이루어진 후, 특정 자원에 대한 자격증명으로서 대신 사용되는 인증 수단
- 서버에 요청을 할 때마다 토큰을 요청에 직접 포함시켜서 전송(주로 Authorization 헤더에 넣어서 전송)
<img src="img/token.png">

1. 과거의 인증시스템
기존 인증 시스템에서는 서버 측 유저들의 정보를 기억하고 있어야 하는데, 이 세션을 유지하기 위해서는 여러가지 방법이 사용된다. (메모리/디스크/데이터베이스)

- 이런 방식의 인증 시스템은 아직도 많이 사용 되고 있습니다. 하지만, 요즘 웹 / 모바일 웹 어플리케이션들이 부흥하게 되면서, 이런 방식의 인증 시스템은 문제를 보이기 시작했습니다. 예를 들자면, 서버를 확장하기가 어려웠죠.

<img src ="img/15.png">

## 서버 기반 인증의 문제점
### 세션 _session
- 유저가 인증을 할 때, 서버는 이 기록을 서버에 저장을 해야합니다. 이를 세션 이라고 부릅니다. 
- 대부분의 경우엔 메모리에 이를 저장하는데, 로그인 중인 유저의 수가 늘어난다면 어떻게될까요? 서버의 램이 과부화가 되겠지요? 
- 이를 피하기 위해서, 세션을 데이터베이스에 시스템에 저장하는 방식도 있지만, 이 또한 유저의 수가 많으면 데이터베이스의 성능에 무리를 줄 수 있습니다.

> 쿠키는 `클라이언트 웹 브라우저`에 저장되는 정보이며, 세션은 `웹 서버`에 저장되는 정보입니다.

### 확장성
- 세션을 사용하면 `서버를 확장하는 것이 어려워집니다.` 여기서 서버의 확장이란, 단순히 서버의 사양을 업그레이드 하는것이 아니라, `더 많은 트래픽을 감당하기 위하여 여러개의 프로세스를 돌리거나, 여러대의 서버 컴퓨터를 추가 하는것을 의미합니다.`

- 세션을 사용하면서 분산된 시스템을 설계하는건 불가능한 것은 아니지만 과정이 매우 복잡해집니다.

### CORS (Cross-Origin Resource Sharing)
웹 어플리케이션에서 세션을 관리 할 때 자주 사용되는 쿠키는 단일 도메인 및 서브 도메인에서만 작동하도록 설계되어있습니다. 따라서 쿠키를 여러 도메인에서 관리하는것은 좀 번거롭습니다.
  - 클라이언트 측 cross-origin 요청을 안전하게 보낼 수 있는 방법을 정한 표준
  - 쉽게 말하면, 스크립트가 전혀 다른 출처를 갖는 API 서버를 사용하려고 하는 상황에서는 뭔가 추가적인 처리를 해주어야 한다는 것!
  - Cross-origin 요청의 위험성
    - 아래 상황을 가정해봅시다.
    - mywebsite.com에서 서비스 중인 웹 사이트는 mywebsite.com/api 에서 REST API를 통해 필요한 정보를 얻습니다. mywebsite.com/api 경로에 대한 인증은 쿠키로 이루어지고 있습니다.
    - 그런데 만약 evil.com 웹 사이트의 스크립트에서 mywebsite.com API에 요청을 마음대로 보낼 수 있다면, 이미 my-website.com 도메인에 대해 브라우저에 저장된 쿠키를 이용해서 API를 마음대로 호출할 수 있을 것입니다. 

- Same-origin Policy (동일 출처 정책)
  - 웹페이지에서 리소스를 불러올 때, 리소스의 출처가 웹페이지의 출처와 같으면 안전하다고 보고, 출처가 다르면 해당 리소스는 안전하지 않다고 보는 원칙
  - 여기서 `'출처'`란 `'프로토콜 + 도메인 + 포트번호'`의 결합을 가리킴. 즉, 세 개가 다 같아야 동일 출처라고 할 수 있고, 셋 중에 하나라도 다르면 동일 출처로 간주되지 않음
  - 웹 보안의 기본 원칙으로, 웹 브라우저의 많은 요소에 적용됨
- Content-Security-Policy
  - Content-Security-Policy 헤더를 이용하면, 동일하지 않은 출처에 대한 리소스를 불러올지 말지 결정할 수 있음

## 토큰 기반 시스템의 작동 원리
- 토큰 기반 시스템은 `stateless`합니다. 무상태. 즉 상태유지를 하지 않는다는 것이죠. 이 시스템에서는 더 이상 유저의 인증 정보를 서버나 세션에 담아두지 않습니다. 
- 이 개념 하나만으로도 `위에서 서술한 서버에서 유저의 인증 정보를 서버측에 담아둠`으로서 발생하는 많은 문제점들이 해소됩니다. 세션이 존재하지 않으니, 유저들이 로그인 되어있는지 안되어있는지 신경도 쓰지 않으면서 서버를 손쉽게 확장 할 수 있겠죠?

- 토큰 기반 시스템의 구현 방식은 시스템마다 크고작은 차이가 있겠지만, 대략적으로 보면 다음과 같습니다:

1. 유저가 아이디와 비밀번호로 로그인을 합니다
2. 서버측에서 해당 계정정보를 검증합니다.
3. 계정정보가 정확하다면, 서버측에서 유저에게 signed 토큰을 발급해줍니다.
  - 여기서 signed의 의미는 해당 토큰이 서버에서 정상적으로 발급된 토큰임을 증명하는 signature를 지니고 있다는 것입니다
  - 웹서버에서 토큰을 서버에 전달 할 때에는, `HTTP 요청의 헤더`에 토큰값을 포함시켜서 전달합니다.
4. 클라이언트 측에서 전달받은 토큰을 저장해두고, 서버에 요청을 할 때 마다, 해당 토큰을 함께 서버에 전달합니다.
5. 서버는 토큰을 검증하고, 요청에 응답합니다.

<img src="img/token-diagram.png">


## 토큰 사용의 장점
### 무상태(stateless) 이며 확장성(scalability)이 있다
이 개념에 대해선 지금 반복적으로 이야기하고 있죠? 이는 그만큼 토큰 기반 인증 시스템의 중요한 속성입니다. 토큰은 클라이언트사이드에 저장하기때문에 완전히 stateless 하며, 서버를 확장하기에 매우 적합한 환경을 제공합니다. 만약에 세션을 서버측에 저장하고 있고, 서버를 여러대를 사용하여 요청을 분산하였다면, 어떤 유저가 로그인 했을땐, 그 유저는 처음 로그인했었던 그 서버에만 요청을 보내도록 설정을 해야합니다. 하지만, 토큰을 사용한다면, 어떤 서버로 요청이 들어가던, 이제 상관이 없죠.

### 보안성
클라이언트가 서버에 요청을 보낼 때, 더 이상 쿠키를 전달하지 않음으로 쿠키를 사용함으로 인해 발생하는 취약점이 사라집니다. 하지만, 토큰을 사용하는 환경에서도 취약점이 존재 할 수 있으니 언제나 취약점에 대비해야 합니다(참조).

### Extensibility (확장성)
여기서의 확장성은, Scalability 와는 또 다른 개념입니다. Scalability 는 서버를 확장하는걸 의미하는 반면, Extensibility 는 `로그인 정보가 사용되는 분야를 확장하는것을 의미합니다.` 토큰을 사용하여 다른 서비스에서도 권한을 공유 할 수 있습니다. 
- 예를 들어서, 스타트업 구인구직 웹서비스인 로켓펀치에서는 Facebook, LinkedIn, GitHub, Google 계정으로 로그인을 할 수 있습니다. 토큰 기반 시스템에서는, 토큰에 선택적인 권한만 부여하여 발급을 할 수 있습니다 (예를들어서 로켓펀치에서 페이스북 계정으로 로그인을 했다면, 프로필 정보를 가져오는 권한은 있어도, 포스트를 작성 할 수 있는 권한은 없죠)

### 여러 플랫폼 및 도메인
서버 기반 인증 시스템의 문제점을 다룰 때 CORS 에 대하여 언급 했었죠? 어플리케이션과 서비스의 규모가 커지면, 우리는 여러 디바이스를 호환 시키고, 더 많은 종류의 서비스를 제공하게 됩니다. 토큰을 사용한다면, 그 어떤 디바이스에서도, 그 어떤 도메인에서도, 토큰만 유효하다면 요청이 정상적으로 처리 됩니다. 서버측에서 어플리케이션의 응답부분에 다음 헤더만 포함시켜주면 되지요.
```
Access-Control-Allow-Origin: *
```
이런 구조라면, assets 파일들(이미지, css, js, html 파일 등)은 모두 CDN 에서 제공을 하도록 하고, 서버측에서는 오직 API만 다루도록 하도록 설계 할 수도 있지요.

### 웹 표준 기반
토큰 기반 인증 시스템의 구현체인 JWT는 웹 표준 RFC 7519 에 등록이 되어있습니다. 따라서 여러 환경에서 지원이 되며 (.NET, Ruby, Java, Node.js, Python, PHP …) 수많은 회사의 인프라스트럭쳐에서 사용 되고 있습니다 (구글, 마이크로소프트 …)

- 다양한 인증 수단(전화번호, 공인인증서, 생체정보 등)의 인증 결과를 토큰이라는 하나의 수단으로 통일할 수 있음
- 쿠키를 사용하지 않음으로써 CORS 관련 문제를 회피할 수 있음

### 토큰 사용의 단점
- 매 요청에 토큰이 포함되게 되므로 적당히 짧은 길이를 유지해야 함
- 토큰 유출에 대한 대비책이 필요 (토큰에 유효기간을 두거나, 유출된 토큰을 강제로 무효화하는 등의 방법을 사용)
- 쿠키와는 다르게, 클라이언트에서 직접 토큰을 저장하고 관리해야 함

### Web Storage
- 브라우저에서 키-값 쌍을 저장할 수 있는 저장소
- 쿠키에 비해 사용하기 편리하고 저장 가능한 용량도 큼(10MB 가량)
- 브라우저 탭이 닫히면 내용이 삭제되는 sessionStorage, 브라우저 탭이 닫혀도 내용이 유지되는 localStrage가 있음

### 보안 상 주의사항
- 토큰을 localStorage에 저장하게 되면 자바스크립트로 토큰을 탈취할 수 있게 되므로, 웹사이트에 악성 스크립트를 삽입하는 공격(XSS)에 노출되지 않도록 신경써야 함
- 직접 DOM API를 사용하는 대신 EJS, React 같은 템플릿 언어를 사용하기만 해도 XSS에 대한 방어는 충분함
<hr>

# 2. JWT : JSON Web Token 소개 및 구조
## [JSON Web Token](jwt.io)
- (JWT.IO 는 브라우저 상에서 JWT 토큰을 검증하고 생성 할 수 있게 해주는 디버거 서비스입니다)
- 최근 널리 사용되고 있는 토큰 형식의 표준
- 토큰 안에 JSON 형식으로 정보를 저장함
- 보안을 위해 서명 또는 암호화를 사용할 수 있음

## 기본 정보
JSON Web Token (JWT) 은 웹표준 (RFC 7519) 으로서 두 개체에서 JSON 객체를 사용하여 가볍고 자가수용적인 (self-contained) 방식으로 정보를 안전성 있게 전달해줍니다.

### 수많은 프로그래밍 언어에서 지원됩니다
JWT 는 C, Java, Python, C++, R, C#, PHP, JavaScript, Ruby, Go, Swift 등 대부분의 주류 프로그래밍 언어에서 지원됩니다.

### 자가 수용적 (self-contained) 입니다
JWT 는 필요한 모든 정보를 자체적으로 지니고 있습니다. JWT 시스템에서 발급된 토큰은, 토큰에 대한 기본정보, 전달 할 정보 (로그인시스템에서는 유저 정보를 나타내겠죠?) 그리고 토큰이 검증됐다는것을 증명해주는 signature 를 포함하고있습니다.

### 쉽게 전달 될 수 있습니다
JWT 는 자가수용적이므로, 두 개체 사이에서 손쉽게 전달 될 수 있습니다. 웹서버의 경우 HTTP의 헤더에 넣어서 전달 할 수도 있고, URL 의 파라미터로 전달 할 수도 있습니다.

## JWT 는 어떤 상황에서 사용될까?

다음과 같은 상황에서 JWT 가 유용하게 사용 될 수 있습니다:

- 회원 인증: JWT 를 사용하는 가장 흔한 시나리오 입니다. 유저가 로그인을 하면, 서버는 유저의 정보에 기반한 토큰을 발급하여 유저에게 전달해줍니다. 그 후, 유저가 서버에 요청을 할 때 마다 JWT를 포함하여 전달합니다. 서버가 클라이언트에게서 요청을 받을때 마다, 해당 토큰이 유효하고 인증됐는지 검증을 하고, 유저가 요청한 작업에 권한이 있는지 확인하여 작업을 처리합니다.
서버측에서는 유저의 세션을 유지 할 필요가 없습니다. 즉 유저가 로그인되어있는지 안되어있는지 신경 쓸 필요가 없고, 유저가 요청을 했을때 토큰만 확인하면 되니, 세션 관리가 필요 없어서 서버 자원을 많이 아낄 수 있죠.
- 정보 교류: JWT는 두 개체 사이에서 안정성있게 정보를 교환하기에 좋은 방법입니다. 그 이유는, 정보가 sign 이 되어있기 때문에 정보를 보낸이가 바뀌진 않았는지, 또 정보가 도중에 조작되지는 않았는지 검증할 수 있습니다.

# JWT의 생김새
header.payload.signature
<img src="img/jwt.png">
> JWT 토큰을 만들때는 JWT 를 담당하는 라이브러리가 자동으로 인코딩 및 해싱 작업을 해줍니다. 하지만 이 포스트에서는 JWT 토큰이 만들어지는 과정을 더 잘 파악하기 위해 하나하나 Node.js 환경에서 인코딩 및 해싱을 하도록 하겠습니다.

## 헤더 Header (typ, alg)
Header 는 두가지의 정보를 지니고 있습니다.
- typ: 토큰의 타입을 지정합니다. 바로 JWT 이죠.
- alg: 해싱 알고리즘을 지정합니다.  해싱 알고리즘으로는 보통 HMAC SHA256 혹은 RSA 가 사용되며, 이 알고리즘은, 토큰을 검증 할 때 사용되는 `signature 부분`에서 사용됩니다. 한번, 이 예제를 살펴보세요 :
```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```
(위 예제에서는 HMAC SHA256 이 해싱 알고리즘으로 사용됩니다)

이 정보를 base64 로 인코딩을 하면 다음과 같습니다.
```js
// Node.js 환경에서 인코딩하기
const header = {
  "typ": "JWT",
  "alg": "HS256"
};

// encode to base64
const encodedPayload = new Buffer(JSON.stringify(payload))
                            .toString('base64')
                            .replace('=', '');
console.log('payload: ',encodedPayload);

/* Result:
header: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
*/
```
```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
```
자, 이제 JWT 의 첫번째 파트가 완성되었습니다!

> 참고: JSON 형태의 객체가 base64 로 인코딩 되는 과정에서 공백 / 엔터들이 사라집니다. 따라서, 다음과 같은 문자열을 인코딩을 하게 되죠: `{"alg":"HS256","typ":"JWT"}`

## 정보 (payload)
Payload 부분에는 `토큰에 담을 정보`가 들어있습니다. 여기에 담는 정보의 한 `‘조각’` 을 클레임(claim) 이라고 부르고, 이는 name / value 의 한 쌍으로 이뤄져있습니다. 토큰에는 여러개의 클레임 들을 넣을 수 있습니다.

클레임 의 종류는 다음과 같이 크게 세 분류로 나뉘어져있습니다:

1. 등록된 (registered) 클레임,
2. 공개 (public) 클레임,
3. 비공개 (private) 클레임

그럼, 하나 하나 알아볼까요?

### 1. 등록된 (registered) 클레임
등록된 클레임들은 서비스에서 필요한 정보들이 아닌, 토큰에 대한 정보들을 담기위하여 이름이 이미 정해진 클레임들입니다. 등록된 클레임의 사용은 모두 선택적 (optional)이며, 이에 포함된 클레임 이름들은 다음과 같습니다:

- iss: 토큰 발급자 (issuer)
- sub: 토큰 제목 (subject)
- aud: 토큰 대상자 (audience)
- exp: 토큰의 만료시간 (expiraton), 시간은 NumericDate 형식으로 되어있어야 하며 (예: 1480849147370) 언제나 현재 시간보다 이후로 설정되어있어야합니다.
- nbf: Not Before 를 의미하며, 토큰의 활성 날짜와 비슷한 개념입니다. 여기에도 NumericDate 형식으로 날짜를 지정하며, 이 날짜가 지나기 전까지는 토큰이 처리되지 않습니다.
- iat: 토큰이 발급된 시간 (issued at), 이 값을 사용하여 토큰의 age 가 얼마나 되었는지 판단 할 수 있습니다.
- jti: JWT의 고유 식별자로서, 주로 중복적인 처리를 방지하기 위하여 사용됩니다. 일회용 토큰에 사용하면 유용합니다.

### 2. 공개 (public) 클레임
공개 클레임들은 충돌이 방지된 (collision-resistant) 이름을 가지고 있어야 합니다. 충돌을 방지하기 위해서는, 클레임 이름을 URI 형식으로 짓습니다.
```js
{
    "https://velopert.com/jwt_claims/is_admin": true
}
```

#3 비공개 (private) 클레임
등록된 클레임도아니고, 공개된 클레임들도 아닙니다. 양 측간에 (보통 클라이언트 <->서버) 협의하에 사용되는 클레임 이름들입니다. 공개 클레임과는 달리 이름이 중복되어 충돌이 될 수 있으니 사용할때에 유의해야합니다.
```js
{
    "username": "velopert"
}
```

### 예제 Payload
```js
{
    "iss": "velopert.com",
    "exp": "1485270000000",
    "https://velopert.com/jwt_claims/is_admin": true,
    "userId": "11028373727102",
    "username": "velopert"
}
```
위 예제 payload 는 2개의 등록된 클레임, 1개의 공개 클레임, 2개의 비공개 클레임으로 이뤄져있습니다.

위 데이터를 base64 로 인코딩을 해볼까요?
```js
// Node.js 환경에서 인코딩하기
const payload = {
    "iss": "velopert.com",
    "exp": "1485270000000",
    "https://velopert.com/jwt_claims/is_admin": true,
    "userId": "11028373727102",
    "username": "velopert"
};

// encode to base64
const encodedPayload = new Buffer(JSON.stringify(payload))
                            .toString('base64')
                            .replace('=', '');

console.log('payload: ',encodedPayload);

/* result
payload:  eyJpc3MiOiJ2ZWxvcGVydC5jb20iLCJleHAiOiIxNDg1MjcwMDAwMDAwIiwiaHR0cHM6Ly92ZWxvcGVydC5jb20vand0X2NsYWltcy9pc19hZG1pbiI6dHJ1ZSwidXNlcklkIjoiMTEwMjgzNzM3MjcxMDIiLCJ1c2VybmFtZSI6InZlbG9wZXJ0In0
*/
```
```
eyJpc3MiOiJ2ZWxvcGVydC5jb20iLCJleHAiOiIxNDg1MjcwMDAwMDAwIiwiaHR0cHM6Ly92ZWxvcGVydC5jb20vand0X2NsYWltcy9pc19hZG1pbiI6dHJ1ZSwidXNlcklkIjoiMTEwMjgzNzM3MjcxMDIiLCJ1c2VybmFtZSI6InZlbG9wZXJ0In0
```
> 주의: base64로 인코딩을 할 때 `dA==` 처럼 뒤에 `=` 문자가 한두개 붙을 때가 있습니다. 이 문자는 base64 인코딩의 padding 문자라고 부릅니다. JWT 토큰은 가끔 URL 의 파라미터로 전달 될 때도 있는데요, 이 = 문자는, `url-safe 하지 않으므로, 제거되어야 합니다.` 패딩이 한개 생길 때도 있고, 두개 생길 때도 있는데, 전부 지웁시다. (제거해줘도 디코딩 할 때 전혀 문제가 되지 않습니다)
JWT 토큰의 두번째 파트가 완성되었습니다!

 

## 서명 (signature)

JSON Web Token 의 마지막 부분은 바로 서명(signature) 입니다. 이 서명은 헤더의 인코딩값과, 정보의 인코딩값을 합친후 주어진 비밀키로 해쉬를 하여 생성합니다.

서명 부분을 만드는 슈도코드(pseudocode)의 구조는 다음과 같습니다.
```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```
이렇게 만든 해쉬를, base64 형태로 나타내면 됩니다 (문자열을 인코딩 하는게 아닌 hex → base64 인코딩을 해야합니다)

 
<br>
한번, 이 포스트에서 사용된 예제 헤더와 정보를 해싱 해볼까요?

먼저, 헤더와 정보의 인코딩 값 사이에 . 을 넣어주고, 합칩니다
`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ2ZWxvcGVydC5jb20iLCJleHAiOiIxNDg1MjcwMDAwMDAwIiwiaHR0cHM6Ly92ZWxvcGVydC5jb20vand0X2NsYWltcy9pc19hZG1pbiI6dHJ1ZSwidXNlcklkIjoiMTEwMjgzNzM3MjcxMDIiLCJ1c2VybmFtZSI6InZlbG9wZXJ0In0`

이 값을 비밀키의 값을 secret 으로 해싱을 하고 base64로 인코딩하면 다음과 같은 값이 나옵니다.
```js
// Node.js 환경에서 해싱 및 인코딩하기
const crypto = require('crypto');
const signature = crypto.createHmac('sha256', 'secret')
             .update(encodedHeader + '.' + encodedPayload)
             .digest('base64')
             .replace('=', '');

console.log('signature: ',signature);
```
```
WE5fMufM0NDSVGJ8cAolXGkyB5RmYwCto1pQwDIqo2w
 ```

이 부분 또한 padding 이 생기면 지워줍니다.

오우! 3번째 부분까지 끝났군요. 그러면 지금까지 구한 값들을 . 을 중간자로 다 합쳐주면, 하나의 토큰이 완성됩니다.
`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ2ZWxvcGVydC5jb20iLCJleHAiOiIxNDg1MjcwMDAwMDAwIiwiaHR0cHM6Ly92ZWxvcGVydC5jb20vand0X2NsYWltcy9pc19hZG1pbiI6dHJ1ZSwidXNlcklkIjoiMTEwMjgzNzM3MjcxMDIiLCJ1c2VybmFtZSI6InZlbG9wZXJ0In0.WE5fMufM0NDSVGJ8cAolXGkyB5RmYwCto1pQwDIqo2w`

이 값을 https://jwt.io/ 의 디버거에 붙여넣어보세요 (JWT.IO 는 브라우저 상에서 JWT 토큰을 검증하고 생성 할 수 있게 해주는 디버거 서비스입니다)

untitled-4

하단의 텍스트가 파란색으로 Signature Verified 라고 뜨면 JWT 토큰이 검증되었다는 것 입니다.

<hr>

# 3. Express.js 서버에서 JWT 기반 회원인증 시스템 구현하기

