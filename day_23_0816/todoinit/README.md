# To Do List

```bash
  git clone https://github.com/owl423/todoinit.git
  cd todoinit
  npm install
  npm run json
```

## 기본 기능
  1. index.html 파일에 text를 입력받는 input과 List에 추가시키는 button을 만든다.
  2. DOM API를 이용해 input에 할 일을 입력하고 button을 누르면 List에 할 일이 추가가 된다.
  3. List item 내부에 삭제 버튼을 누르면 List item이 삭제가 되도록 구현한다.

## 통신하는 기능
  1. 페이지가 로딩 될 때 ajax 통신을 이용해 DB에서 data를 `GET` HTTP method를 통해 가져온다. url은 `/toDoList`
  2. List item이 추가가 되면 ajax 통신을 이용해 DB에 data를 `POST` HTTP method를 통해 추가한다.
  3. List에서 삭제될 경우 `DELETE` HTTP method를 통해 DB에서 삭제한다.

> Vanilla JS 사용하기