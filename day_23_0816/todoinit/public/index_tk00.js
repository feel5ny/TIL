(function(window,document){ // 스니펫으로 만들기
  'use strict';

  function addListItem(e){
    if(!input.value.trim()) return;
    // 빈문자열 입력시 추가가 안되도록.
    // trim은 공백을 제거 후 값을 받는데, 만약 문자열이 있는 경우,true가 나오게되고, 앞부분에 연산자때문에 false가 되면서 return값을 넘어가게된다. 만약 문자열이 없는 경우 반대의경우가 되어서 return을 만나게 되고, addListItem 함수를 빠져나간다.
    if((e.keyCode === 13) || e.type === 'click'){
      todoList.insertAdjacentHTML('beforeend','<li class="todo-item">'+input.value+'<button class="delete">삭제</button> </li>'); 
      //  li요소에 삭제버튼과 같이
      input.value = "";
      var delButton = document.querySelectorAll('.delete');
      // querySelector을 사용하면 요소 중 첫번째 요소만 갖고오기 때문에 All로 사용해야한다.
      // console.log('delButton: ',delButton[delButton.length-1]);
      delButton[delButton.length-1].addEventListener('click',function(){
        todoList.removeChild(delButton[delButton.length-1].parentNode);
      });
      input.focus(); //focus가 계속 유지
    }
  }  
  var input = document.querySelector('.input');
  // console.log('ipnut: ',input); input이 잘 찾아졌는지 확인
  var button = document.querySelector('.button'); 
  // console.log('button: ',button); 버튼이 잘 찾아졌는지 확인
  var todoList = document.querySelector('.todo-list');
  // console.log('todo-list: ',todoList); todoList가 잘 찾아졌는지

  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);

 
  }


})(window,document); // 지역화 시켜서 다른사람들과 변수명같아도 충돌 방지.
