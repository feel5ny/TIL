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