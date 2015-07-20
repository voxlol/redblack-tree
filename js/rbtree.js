var color = { red : 0, black : 1}
Object.freeze(color); // makes the colors immutable

// REDBLACK TREE CLASS

var RedBlackTree = function(){
  this.root;
}

RedBlackTree.prototype.insert = function(value){
  var insertNode = new Node(value, color.red);

  if(this.root) {
    this.root.insert(insertNode);
  } else {
    insertNode.color = color.black;
    insertNode.left = new Node();
    insertNode.right = new Node();
    this.root = insertNode;
  }
}
