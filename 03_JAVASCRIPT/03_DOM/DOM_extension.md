## 1. 선택자 API
API 레벨1 : `querySelector`,`querySelectorAll`
API 레벨2 : `matchesSelector`

## 2. 요소 간 이동
버전 9 미만의 IE는 타 브러우저와 달리 요소 사이의 공백을 텍스트 노드로 반환하지 않는다. 브라우저 사이의 차이를 극복하려는 노력으로 Element Traversal 명세에서는 새 프로퍼티 그룹을 정의했다.

- `childElementCount`
- `firstElementChild`
- `lastElementChild`
- `previousElementSibling`
- `nextElementSibling`

> 선생님 자료에는 'HTML에 공백을 제거하거나 jQuery: .prev()와 jQuery: .next()를 사용한다.'라고 나와있다.

## 3. HTML5
- `getElementsByClassNmae()`메서드
- `classList` 프로퍼티
ㄴ