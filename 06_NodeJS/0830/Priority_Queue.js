// 가중치를 부여하는

// 사람과, 급한순서

function PriorityQueue(){
  var items = [];
  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function(element, priority){
    var queueElement = new QueueElement(element, priority);

    if(items.length === 0){
      items.push(queueElement);
    } else{
      var added = false;
      // 0번째부터 방문하면서, 그 자리에 있는 priority와 나의 priority를 비교 후, 나보다 높으면 splice해서 자리에 들어가는 것.
      // 나보다 낮은사람이 없으면 마지막에 푸시.
      for(var i=0; i<items.length;i++){
        if(queueElement.priority < items[i].priority){
          items.splice(i,0,queueElement);
          added = true;
          break;
        }
      }
      if (!added){
        items.push(queueElement);
      }

    }
  };
  this.dequeue = function(){
    return items.shift();
  };
  this.front = function(){
    return items[0];
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
}


var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Fast",1);
priorityQueue.enqueue("School",3);
priorityQueue.enqueue("Campus",2);

console.log(priorityQueue.de4  queue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());