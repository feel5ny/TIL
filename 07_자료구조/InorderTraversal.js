// 최소값 최대값
// 
function BinarySearchTree(){
  var Node = function(key){
      this.key = key;
      this.left = null;
      this.right = null;
  };

  var root = null;

  var insertNode = function(node, newNode){
      if (newNode.key < node.key){
          if(node.left === null){
              node.left = newNode;
          } else {
              insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null){
              node.right = newNode;
          } else {
              insertNode(node.right, newNode);
          }
      }
  };

  this.insert = function(key){
      var newNode = new Node(key);

      if(root === null){
          root = newNode;
      } else {
          insertNode(root, newNode);
      }
  };
  
  //preOrderTraverse
  var preOrderTraverseNode = function(node, callback){
      if (node !== null){
          callback(node.key);
          preOrderTraverseNode(node.left, callback);
          preOrderTraverseNode(node.right, callback);
      }
  };
  
  this.preOrderTraverse = function(callback){
      preOrderTraverseNode(root, callback);
  };
  // inOrderTraverse
  var inOrderTraverseNode = function(node, callback){
      if (node !== null){
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
  };

  this.inOrderTraverse = function(callback){
      inOrderTraverseNode(root, callback);
  };

  //postOrderTraverse
  var postOrderTraverseNode = function(node, callback){
      if (node !== null){
        inOrderTraverseNode(node.left, callback);
        inOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
  };

  this.postOrderTraverse = function(callback){
      inOrderTraverseNode(root, callback);
  };
  this.min = function(){
    return minNode(root);
  };
  var minNode = function(node){
    if(node){ // 위의 코드에서 왼쪽에 작은 수가 넣는 식으로 tree를 구성했기 때문에, 왼쪽 node만 돌아가는 식으로 짬
      while(node && node.left !== null){
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
    
  this.max = function(){
    return maxNode(root);
  };
  var maxNode = function(node){
    if(node){ // 위의 코드에서 왼쪽에 작은 수가 넣는 식으로 tree를 구성했기 때문에, 왼쪽 node만 돌아가는 식으로 짬
      while(node && node.right !== null){
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
}


function printNode(value){
      console.log(value);
}

var tree = new BinarySearchTree();
var nodeList = [11,3,8,2,10,16,20,50,4,1,7,6, 12, 15];
for(var i=0; i<nodeList.length; i++){
	tree.insert(nodeList[i]);
}
// tree.preOrderTraverse(printNode);
tree.inOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);