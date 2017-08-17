(function(window,document){ // 스니펫으로 만들기
  'use strict';
  function addListItem(e){
    if(!input.value.trim()) return;
    // 빈문자열 입력시 추가가 안되도록.
    // trim은 공백을 제거 후 값을 받는데, 만약 문자열이 있는 경우,true가 나오게되고, 앞부분에 연산자때문에 false가 되면서 return값을 넘어가게된다. 만약 문자열이 없는 경우 반대의경우가 되어서 return을 만나게 되고, addListItem 함수를 빠져나간다.
    if((e.keyCode === 13) || e.type === 'click'){
      itemPost(input.value);
      // insertItem(todoList, input.value);
      input.value = "";
      input.focus();
      //focus가 계속 유지
    }
  } 

  function deleteListItem(id, target){
    // var menu = document.getElementsByClassName('.menu');
    var xhr = new XMLHttpRequest();
    xhr.open('delete','/toDoList/'+id, true); 
    xhr.send(); 
    // http통신에서 body data가 들어가는 것이다 null부분.
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          console.log('this.responseText: ', this.responseText);
          todoList.removeChild(target.parentNode.parentNode);
        }
      }
    }
  }
  
  
  function itemPost(task){
    var xhr = new XMLHttpRequest();
    xhr.open('post','/toDoList',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = {task};
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 201){
          // console.log(this.responseText);
          var item = JSON.parse(this.responseText);
          insertItem(todoList, item.task, item.id);
        }
      }
    }
  }

  function getListItem(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/toDoList', true);
    xhr.send(); //null을 넣는것은 코딩 습관이다. 안넣어도 되는데, 안넣었을 때는 null이나 undefined가 나올 수 있으므로..
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          // console.log('this.responseText :',this.responseText);
          var toDoItemList = JSON.parse(this.responseText);
          // console.log('todItemList: ',todItemList);
          toDoItemList.forEach(function (item){
            console.log('item.task: ',item.task);
            insertItem(todoList, item.task, item.id);
          });
        }
        else{
          console.error('GET failed');
        }
      }
    }
  }


  // list item 추가해주는 함수
  function insertItem(element, task, id){
    element.style.display = "block";
    element.insertAdjacentHTML('beforeend','<li class="todo-item"><input type="checkbox" class="done" id ="done"></input>'+'<label class = "doneText" for = "done">'+task+'</label><div class="menu"><button class="delete">삭제</button></div> </li>'); 
    //  li요소에 삭제버튼과 같이
    bindDeleteButton(element, id, task);
  } 
  // deleteButton을 바인딩 시켜주는 함수
  function bindDeleteButton(element, id, task){
    var doonBox = document.querySelectorAll('.done');
    var delButton = document.querySelectorAll('.delete');
    // querySelector을 사용하면 요소 중 첫번째 요소만 갖고오기 때문에 All로 사용해야한다.
    // console.log('delButton: ',delButton[delButton.length-1]);
    var doneText = document.querySelectorAll('.doneText');
    doonBox[doonBox.length-1].addEventListener('click',function(){
      for( var i = 0; i < doneText.length; i++ ){
        var item = doneText.item(i);
        item.style.color = "lightgray";
        item.style.textDecorationLine = "line-through";
    }
    // if (!input) { return; }
    });

    delButton[delButton.length-1].addEventListener('click',function(){
      if (delButton.nextSibling===null){
        element.style.display = "none";
      }
      deleteListItem(id, this);
    });
  }
  var input = document.querySelector('.input');
  // console.log('ipnut: ',input); input이 잘 찾아졌는지 확인
  var button = document.querySelector('.button'); 
  // console.log('button: ',button); 버튼이 잘 찾아졌는지 확인
  var todoList = document.querySelector('.todo-list');
  // var todoListItem = document.querySelector('.todo-item');
 
  // console.log('todo-list: ',todoList); //todoList가 잘 찾아졌는지

  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);
  

  getListItem();
   // CRUD create, read, update, delete
  // HTTP method post, get, put, delete
})(window,document); // 지역화 시켜서 다른사람들과 변수명같아도 충돌 방지.


//오늘 날짜 넣기.
(function today(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var todayDate = document.getElementById('today');
  
  if(dd<10) {
      dd='0'+dd
  } 
  
  if(mm<10) {
      mm='0'+mm
  } 
  
  today = yyyy+'. '+mm+'. '+dd;
  console.log(todayDate);
  todayDate.innerHTML += today;
})();

// 1. 마지막꺼 삭제시 display:none 되는 것
// 2. 체크박스 해제시 style 다시 돌아가기
// 3. 체크박스 커스터마이징