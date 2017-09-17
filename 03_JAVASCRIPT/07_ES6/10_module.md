# module(export & import)의 이해
의존선 관계를 정리할 필요 있다.

1. import해서 module을 불러 올 수 있다. 
2. 불러올때는 반드시 불러올 파일에서 export 작업을 해야한다.
  - default 없이 export 할 경우, import에서 객체형태로 갖고와야한다.
  ```js
  // defalut 없이 export한 모듈을 import할 때 
  import {Ajax} from './ajax';

  // 한 모듈에서 여러 객체 import할 때 
  import {Ajax, test, test2} from './ajax';
  
  ```
  - default는 브레이스 없이 바로 쓸 수 있도록 도와준다.
  - export 키워드는 global으로 모듈을 노출하는 역할을 한다. default 키워드는 export하는 `type`을 의미한다. default로 지정했을 때 가장 simple한 방법이다. [출처](http://asfirstalways.tistory.com/273)

```js
// bookList 실습 예제 
import Ajax from './ajax';

// inputs
const inputTitle = document.getElementById('titleForm');
const inputAuthor = document.getElementById('authorForm');
const inputPrice = document.getElementById('priceForm');

```
```js
// export default하여서 내보내기를 해야 main파일에서 import가 가능하다.
export default class Ajax {
  static get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET',url);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      }
    })
  }
}

```


## Reference
[_Jbee::Devlog::](http://asfirstalways.tistory.com/273)