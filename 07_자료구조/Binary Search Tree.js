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

  this.serach = function(key){
    return searchNode(root,key);
  };
  var searchNode = function(node,key){
    if(node === null){
      return false;
    }
    if (key<node.key){
      return searchNode(node.left,key);
    } else if(key > node.key){
      return searchNode(node.right,key);
    } else{
      return true;
    }
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
tree.preOrderTraverse(printNode);