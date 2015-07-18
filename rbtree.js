var red = 0, black = 1;

var RedBlackTree = function(){
  this.root;
}

RedBlackTree.prototype.insert = function(value){
  var insertNode = new Node(value, red);

  if(this.root) {
    this.root.insert(insertNode);
  } else {
    insertNode.color = black;
    this.root = insertNode;
  }
}

var Node = function(value, color, leftNode, rightNode, parent){
  this.value = value || null;
  this.color = color || black;
  this.left = leftNode || null;
  this.right = rightNode || null;
  this.parent = parent || null;
}

Node.prototype.insert = function(insertNode){
  if(insertNode.value > this.value) {
    if(this.right && this.right.value) {
      this.right.insert(insertNode);
    } else {
      this.right = insertNode;
      insertNode.left = new Node();
      insertNode.right = new Node();
    }
  } else if(insertNode.value < this.value) {
    if(this.left && this.left.value) {
      this.left.insert(insertNode);
    } else {
      this.left = insertNode;
      insertNode.left = new Node();
      insertNode.right = new Node();
    }
  } else {
    console.log("invalid value provided");
  }
}

