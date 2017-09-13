
제이커리의 큰 장점 : 브라우저의 호완성!

n.fn.init
// fn은 제이커리의 프로토타입의 축약형이다.

jQuery()를 생성자 함수로 치자면, fn으로 들어가면 (prototype) 많은 메서드들이 존재한다.

jQuery의 축약형은 $이다.
shortcut을 만들 때는 $마크 안에 jquery를 넣는것이다.

# 3. jQuery 함수
## 3.1 CSS 스타일의 selector를 인수로 전달받을 때


## 3.2 HTML을 인수로 전달받을 때
## 3.3 JavaScript 객체를 인수로 전달받을 때
## 3.4 콜백함수를 인수로 전달받을 때
# 4. Selector
## 4.1 태그 / ID / Class 선택자
## 4.2 후손 선택자 (Descendant Selector)
## 4.3 자식 선택자 (Child Selector)
## 4.4 복합 선택자 (Multiple Selector)
셀렉터에 너무 부담스럽게 넣으면 안된다.
특히 자식 선택자들이 부담스럽게 들어갈 가능성이 있다.
```html
<script>
      $(function () {
        $('#france > li, .promo').text('Orlando');

        // var el = document.querySelectorAll('#france > li, .promo');
        // for (var i = 0; i < el.length; i++) {
        //   el[i].textContent = 'Orlando';
        // }
      });
    </script>
```
## 4.5 가상 클래스 선택자 (Pseudo-Class Selector)
```html
<script>
      $(function () {
        $('#destinations li:first').css('color', 'red'); // 리스트의 첫번째 선택할 때.
        $('#destinations li:last').css('color', 'blue');
        // $('#destinations li:odd').css('color', 'orange');
        // $('#destinations li:even').css('color', 'purple');

        // var el = document.getElementById('destinations');
        // console.log(el.firstChild);
        // console.log(el.lastChild);

        // el.firstChild.style.color = 'red';
        // el.lastChild.style.color = 'blue';
      });
    </script>
```
# 5. Traversing
`find()`메서드
[jQuery Traversing](http://api.jquery.com/category/traversing/)

# 6. Manipulation
- Appending
- Removing

## 6.1. Appending
append 뜻 : 추가하다.
- append()
- prepend()
- after()
- before()
<img src = "http://poiemaweb.com/img/jq_Appending.png">

## 6.2. Removing

# 7. CSS / Attributes
# 8. Event

### 프로퍼티와 어트리뷰트의 차이
- 어트리뷰트 : html의 속성
  - html은 객체가 아니라 구조다.
  > DOM상태에서 객체라고 불린다..?
  - 어트리뷰트가 DOM으로 변환됐을 때 프로퍼티로 변환된다.
    - DOM에는 class라는 객체가 없다.
      - className이라고 붙여진 이유이다.
      - class는 `리스트`의 형태를 갖고 있다.
      - 때문에 class가 DOM으로 넘어가면 classList로 넘어간다. 
    - id는 값이 하나이다.
    - td요소는 아예 프로퍼티가 DOM상에 없다.
`<input type= "text" value ="1">`
- 위 상태에서 텍스트박스에 사용자가 숫자를 바꾸면, `어트리뷰트는 안바뀌지만, DOM상의 value property는 바껴진다.` 
  - 어트리뷰트와 프로퍼티는 항상 따로 생각해야한다.
[참고_어트리뷰터 바인딩](http://poiemaweb.com/angular-component-template-syntax)
- 프로퍼티 : 객체의 속성


- 초기값에 갖고오는 value값과 유저가 변경후에 갖고오는 value값은 다르기 때문에, 

- jQuery는 Promise함수를 통해서(메서드 들이있다.) http 통신의 성공 여부를 판단한다. (html state처럼)
  - `done`, `fail`, `always`