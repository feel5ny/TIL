# 정규표현식
정규표현식(Regular Expression)은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용한다.
가독성이 떨어지는 문제가 있다.
<img src ="http://poiemaweb.com/img/regular_expression.png">

```js
var expression = /pattern/flags;
```
pattern 부분에 클래스, 수량자, 그룹, 룩어헤드, 역참조 등이 쓰인다.<br>
플래그는 해당 정규 표현식이 어떻게 동작할지 나타낸다.
- `g`
  - 전역 모드를 지정한다. 이 플래그를 지정하면 문자열에서 패턴을 찾는 즉시 종료하지 않고 문자열 전체에서 동작한다.
- `i`
  - 대소문자 비구분 모드를 지정한다. 즉, 대소문자를 구별하지 않고 검색한다.
- `m`

## 정규 표현식 인스턴스 프로퍼티
## 정규 표현식 인스턴스 메서드
## RegExp 새엇ㅇ자 프로퍼티
