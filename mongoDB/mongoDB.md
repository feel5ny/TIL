1. MongoDB?
2. MongoDB 설치
3. 관계형 데이터베이스와 몽고디비 비교
4. REST API와 몽고디비 비교
5. MEAN 스택 미니 프로젝트

# MongoDB?
몽고DB(MongoDB)
  - 크로스 플랫폼
  - 도큐먼트(JSON과 같은 `동적 스키마형 문서`) 지향
  - NoSQL 데이터베이스 시스템
  - 오픈소스(Open Source)
  - C++로 작성됨
  - 높은 확장성
  - 높은 성능
  - 더 쉽고 더 빠르게 데이터 통합 가능

## NoSQL
NoSQL 데이터베이스는 전통적인 관계형 데이터베이스 보다 덜 제한적인 일관성 모델을 이용하는 데이터의 저장 및 검색을 위한 매커니즘을 제공한다. 이러한 접근에 대한 동기에는 디자인의 단순화, 수평적 확장성, 세세한 통제를 포함한다. NoSQL 데이터베이스는 단순 검색 및 추가 작업을 위한 매우 최적화된 키 값 저장 공간으로, 레이턴시와 스루풋과 관련하여 상당한 성능 이익을 내는 것이 목적이다. NoSQL 데이터베이스는 빅데이터와 실시간 웹 애플리케이션의 상업적 이용에 널리 쓰인다. 또, NoSQL 시스템은 SQL 계열 쿼리 언어를 사용할 수 있다는 사실을 강조한다는 면에서 "Not only SQL"로 불리기도 한다. (위키백과)
- 키와 값의 형태로 저장 가능하다. : **Redis**
- 문서현태 JSON (`J`ava`S`cript `O`bject `N`otation) : **MongoDB**
  - NoSQL중에 MongoDB는 유명하다.
- 컬럼패밀리 (빅데이터 데이터베이스 기준)
- 그래프

## 데이터 저장소에 대한 CAP 이론

CAP 정리, 또는 브루어의 정리(Brewer -)는, 다음과 같은 세 가지 조건을 모두 만족하는 분산 컴퓨터 시스템이 존재하지 않음을 증명한 정리이다.
- 일관성(Consistency): 모든 노드가 같은 순간에 같은 데이터를 볼 수 있다.
- 가용성(Availability): 모든 요청이 성공 또는 실패 결과를 반환할 수 있다. (365일  24시간 계속 쓸 수 있다.)
- 분할내성(Partition tolerance): 메시지 전달이 실패하거나 시스템 일부가 망가져도 시스템이 계속 동작할 수 있다.

위의 세 가지 조건의 첫 글자를 따서 CAP 정리라고 부른다.
2000년 전산학자 에릭 브루어가 이 명제를 가설로서 제시하였고, 2002년 세스 길버트와 낸시 린치가 이를 증명하였다.

<img src = "nosql_cap.png">

CAP정리에 따르면 분산 시스템이 추구하는 데이터의 특성은 세 가지 중 두가지만 보장할 수 있다.

- CA 분류 (일관성 +가용성) : 전통적인 RDBMS. 트랜잭션.
- CP 분류 (일관성 + 분할용인) :  구글의 BigTable, HBase, `MongoDB` 등
- AP 분류 (가용성 + 분할용인) : Dynamo, Cassandra, 등

1. 데이터를 저장 `데이터베이스`
2. 데이터를 처리할 수 있는 `자바스크립트 기술`

- mongod: 서버 쪽
- mongo: 클라이언트 쪽


## 관계형 데이터베이스와 몽고디비 비교

| RDBMS         | MongoDB       |
| :--------------| :------------- |
| Database      | Database      |
| Table         | Collection    |
| Row           | Document      |
| Column        | Key           |
| Primary Key   | ObjectId(_id) |

- 몽고디비는 함수를 갖고 진행한다.
- 가장 큰 차이점은 배열을 쓸수 있냐 없냐. 

### RDBMS 명령과 MongoDB 함수 비교

|Insert| |
|------|------|
|SQL          | insert into members ("name","email") values("홍길동","hong@aaa.com") |
|Mongo DB     | db.members.insert({name:"hong", email:"hong@aaa.com"}) |
----

|Select| |
|----|----|
|SQL          | select * from members where name="홍길동" |
|Mongo DB     | db.members.find({name:"홍길동"}) |
----

| Update | |
|---|---|
|SQL          | update members set email="hong@aaa.com" where name="홍길동"|
|Mongo DB     | db.members.update( {name:"홍길동"}, {$set :{email:"hong@aaa.com"} } )|
----

|Delete| |
|---|---|
| SQL          | delete from members where name="홍길동" |
| Mongo DB     | db.members.remove({name:"홍길동"}) |


## REST API와 몽고 디비 관계 이해

REST(Representational State Transfer)는 월드 와이드 웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식이다. 이 용어는 로이 필딩(Roy Fielding)의 2000년 박사학위 논문에서 소개되었다. 필딩은 HTTP의 주요 저자 중 한 사람이다. 이 개념은 네트워킹 문화에 널리 퍼졌다.
엄격한 의미로 REST는 네트워크 아키텍처 원리의 모음이다. 여기서 '네트워크 아키텍처 원리'란 자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반을 일컫는다. 간단한 의미로는, 웹 상의 자료를 HTTP위에서 SOAP이나 쿠키를 통한 세션 트랙킹 같은 별도의 전송 계층 없이 전송하기 위한 아주 간단한 인터페이스를 말한다. 이 두 가지의 의미는 겹치는 부분과 충돌되는 부분이 있다. 필딩의 REST 아키텍처 형식을 따르면 HTTP나 WWW이 아닌 아주 커다란 소프트웨어 시스템을 설계하는 것도 가능하다. 또한, 리모트 프로시저 콜 대신에 간단한 XML과 HTTP 인터페이스를 이용해 설계하는 것도 가능하다.(위키백과)


| HTTP METHOD   | 역할           |  MongoDB 함수  |
| --------------| ------------- | ------------- |
| POST          | 리소스를 생성    | insert, save  |
| GET           | 리소스를 조회    | find          |
| PUT           | 리소스를 수정    | update        |
| DELETE        | 리소스를 삭제    | delete        |

## MEAN 스택 미니 프로젝트

### MEAN 스택 이란?
웹 애플리케이션 개발을 위한 풀 스택 플랫폼.
`클라이언트와 서버, 데이터베이스 프로그래밍까지 자바스크립트 통일.`
MEAN 스택은 풀 스택을 위한 몇 가지 소프트웨어를 묶은 일종의 번들로 다음과 같은 요소로 구성되어 있다.

- `M`ongoDB : 문서 기반의 NoSQL 데이터베이스.
- `E`xpressJS : Node.js에서 가장 널리 쓰이는 웹 프레임워크.
- `A`ngularJS : 구글에서 개발한 MVC 기반 클라이언트 측 자바스크립트 프레임워크.
- `N`ode.js : 자바스크립트 엔진 기반의 웹 서버.

> [json복습](http://www.json.org/json-ko.html)

MEAN 스택을 활용한 Todo Application을 실습합니다!

### Blocking과 Non-blockig
<img src="img/blocking_nonblocking.png">

> 오른쪽이 non-blocking

- 서버 : server.js
- 클라이언트 : index.html / todo.js
- [mongoose모듈](http://mongoosejs.com/): mongo와 node.js와 연결해준다.

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String }); // cat은 테이블 이름

// ODM : Object Document Model
var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
```