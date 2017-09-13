## 이벤트 핸들러 vs 이벤트 리스너 (출처 : [Code Dragon](http://codedragon.tistory.com/5743))

### 이벤트 핸들러(event handler)
- 이벤트가 발생했을 때 그 처리를 담당하는 `실행 함수`를 가리킵니다.
 
### 이벤트 리스너(event listener)
* 특정한 이벤트에 대해서 일어날 동작을 정의 할 수 있습니다.
* 지정된 타입의 이벤트가 특정 요소에서 발생하면, 웹 브라우저는 그 요소에 등록된 이벤트 리스너를 실행시킵니다.
* 이벤트 리스너와 이벤트 핸들러를 합쳐 이벤트 리스너라고 하기도 합니다.
* 이벤트가 발생했을 때 이외에도 이벤트를 등록할 수 있다. 
  
|이벤트|이벤트 리스너|이벤트 핸들러|
|:----|:----------|:-----------|
|click|onclick    |function(){}|
 
### 이벤트 리스너 등록 방법
- 작성된 이벤트 리스너는 먼저 해당 객체나 요소에 등록되어야만 호출될 수 있습니다.
- 객체나 요소에 이벤트 리스너를 등록하는 방법은 다음과 같습니다.
  1. 객체나 요소에 프로퍼티로 등록하는 방법
  2. 객체나 요소의 메소드로 이벤트 리스너를 전달하는 방법
 
### 이벤트 호출 순서
- addEventListener() 메소드를 사용하면 하나의 이벤트 타입에 여러 개의 이벤트 리스너를 등록할 수 있습니다.  이때 특정 타입의 이벤트가 발생하면 브라우저는 다음과 같은 순서로 이벤트를 호출하게 됩니다.
  1. 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록한 이벤트 리스너가 가장 먼저 호출됩니다.
  2. addEventListener() 메소드를 사용하여 등록한 이벤트 리스너를 등록한 순서대로 호출합니다.