20171202 Angular 101 - workshop 1st

--------------

## 1. Quick Start

src 내부에는 중요한 파일들 위주로 있다 ..
karma?
protractor?

--------------

## 2. 개발 환경 설정
```bash
nvm ls
```
설치되어있는 node version을 볼 수 있다.

```bash
nvm alias defatlt 8.9.0
```
default 버전을 정하는 cli

--------------

## 3. Angular Component
Component는 무엇인가?
- 독립적으로 동작 가능한 UI 요소
- HTML 템플릿, 스타일과 로직을 결합 (형태 표현과 기능 제어) 
- DOM 과 같은 트리 구조로 UI 요소들을 구성
- W3C 표준 웹컴포넌트 기술을 기반으로 함
  - HTML Templates
  - HTML Imports
  - Shadow DOM - encapsulation
  - Custom Elements
  - https://developer.mozilla.org/ko/docs/Web/Web_Components
  - ex_폴리머

### Component를 만드는 방법
- 앵귤러는 module파일로 전체 컴포넌트를 관리한다.
- 한 컴포넌트에서 사용하는 스타일은 그 컴포넌트에만 적용이된다. 샌드박스 형태로 넣어진다.

### 왜 `app-`?
- `.angular-cli.json`에 설정이 되어있다.
- `prefix`에 app이라고 지정되어있어서 그렇다. 

### Component 내의 로직 처리 방법
- react의 props와 state처럼 주고 받을 수 있다.
- 이것은 데이터(클래스)와 뷰(템플릿)의 이야기
- 데이터가 바뀌면 뷰는 자동으로 바뀐다.
- 데이터를 바꾸려면 사용자의 입력이 필요하다.
  - 항상 그런것은 아니다. (Electron) 
  - 트리거가 사용자가 아닐때가 있다는 말이다.
- 사용자가 입력함과 동시에 뷰를 바꾸려면 양방향 데이터 바인딩을 사용한다2.
  - 부모컴포넌트와 자식 컴포넌트 사이의 데이터 바인딩은 어렵다. 
  - ngModel이 편리하게 해준다.
    - input의 경우 formsModule을 얹어놔야한다...
  - [()]
  - [(ngModel)]
- 인터렉션에서는 `()`를 쓴다.
- 내장 로컬 변수 `$`

### Component 각 통신 (의존 관계)
- 컴포넌트 트리 상에 붙어 있다면 ? => @Input, @Output
  - react의 props 같은 ..
- 붙어있지 않다면 ?
  - 같은 가지에 있다면 ?
  - 같은 가지가 아니라면 ?
    - 중개자
    - 서비스

--------------

## 4. 템플릿과 데이터 바인딩
### `<app-sample test="문자열"></app-sample>`
`<app-sample3 *ngFor="let name of names" [test]="name"></app-sample3>` 
> 다음 주에 배움

--------------

## 5. 컴포넌트의 생명 주기

--------------

## 6. Angular-cli

--------------

## 7. DI
https://www.npmjs.com/package/inversify

### DI?
class를 모듈에 넣어주면 앵귤러가 자동으로 인스턴스를 생성해서 넣어주는 개념이다. IOC

### 서비스 
- 단일객체
- singleTon 객체
- 리액트의 스토어 개념이다.

--------------

참고링크 : http://slides.com/woongjae/angular101-1
