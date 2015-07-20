var color = { red : 0, black : 1}
Object.freeze(color); // makes the colors immutable

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
    insertNode.leftChild(new Node());
    insertNode.rightChild(new Node());
    this.setRoot(insertNode);
  }
}

