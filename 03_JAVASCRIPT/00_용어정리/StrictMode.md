# Strict Mode
Strict Mode는 ECMAScript 5 버전에 있는 새로운 기능으로써, `당신의 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다.` 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.

```js
// Non-strict code...
(function(){
    "use strict";
    // Define your library strictly...
})();
// Non-strict code...
```
[출처](http://blog.aliencube.org/ko/2014/01/02/reasons-behind-using-strict-mode-while-coding-javascript/)