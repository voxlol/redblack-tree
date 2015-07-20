// REDBLACK TREE CLASS

var RedBlackTree = function(){
  this.root = null;
}

RedBlackTree.prototype.insert = function(value){
  var insertNode = new Node(value, 'r');

  if(this.root instanceof Node) {
    this.root.insert(insertNode);
  } else {
    insertNode.color('r');
    insertNode.leftChild(createNil(insertNode));
    insertNode.rightChild(createNil(insertNode));
    this.setRoot(insertNode);
  }
}

