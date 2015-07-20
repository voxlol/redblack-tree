// NODE CLASS

var Node = function(value, startColor, leftNode, rightNode, parent){
  this.value = value || null;
  this.color = startColor || color.black;
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

