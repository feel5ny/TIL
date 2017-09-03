// 2진수값 배열을 만드는 함수를 만들어라.
// 1. 2로 나누고
// 2. 임의의 배열에 push
// 3.

// stack
function Stack() {
  var items = [];
  
  this.push = function(element){
    return items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return items[items.length]
  };
  this.size = function(){
    return items.legnth;
  };
  this.isEmpty = fucntion(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
}

var stack = new Stack();

function binaryConverter(num){
  var remStack = new Stack(),
      rem,
      binaryString = '';// 몫을 넣는.
  // 1. 
  // for(var i = 0;;i++)
  while(decimal > 0){
    rem = Math.floor(decimal %2);
    remStack.push(result%2);
    decimal = Math.floor(decimal /2);
  }

  while(!remStack.isEmpty){
    binaryString += remSt
  }
  // console.log(result);
  console.log(resultArr);
}


function Queue(){
  var items = [];
  this.enqueue = function(element){
    return items.push(element);
  };

 this.dequeue = function(){
    return items.shift();
  };

 this.front = function(){
    return items[0];
  };

 this.isEmpty = function(){
    return items.length === 0
  };

 this.clear = function(){
    items = [];
  };

 this.size = function(){
    return items.length;
  };

 this.print = function(){
    console.log(items.toString());
  };

}

function Queue_with_stack(){
  var inbox = [];
  var outbox = [];
  
  this.enqueue = function(element){
    // enqueue는 배열의 뒷부분에 push되는 방식. (stack 방식)
    while(outbox.length > 0){
      outbox.push(index.pop());
    }
    return inbox.push(element);
  };

  this.dequeue = function(){
    // dequeue는 배열의 앞부분에서 제거되는 방식 (큐 방식)
    // outbox는 나가는 배열들.
    while(inbox.length >1){
      outbox.push(inbox.pop());
    }
    return inbox.pop();
  };
}
