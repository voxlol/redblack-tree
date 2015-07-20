Node.prototype.isLeaf = function(){
  return this.left === null && this.right === null;
}

Node.prototype.isRoot = function(){
  return this.parent === null;
}

Node.prototype.toggleColor = function(){
  this.color = this.color === 0 ? 1 : 0;  // toggle the color
}

Node.prototype.getColor = function(){
  if(this.color === 0) return "red"
  else return "black";
}

Node.prototype.getValue = function(){
  return this.value;
}


// Getter/setters
// Left Child
Node.prototype.setLeftChild = function(node){
  this.left = node;
}

Node.prototype.getLeftChild = function(){
  return this.left || undefined;
}

// Right Child
Node.prototype.setRightChild = function(node){
  this.right = node;
}

Node.prototype.getRightChild = function(){
  return this.right || undefined;
}

// Parent
Node.prototype.setParent = function(node){
  this.parent = node;
}

Node.prototype.getParent = function(){
  return this.parent || undefined;
}

// Extended Family
Node.prototype.getGrandParent = function(){
  return this.parent ? this.parent.parent : undefined;
}

Node.prototype.getUncle = function(){
  if(this.grandParent() === undefined)
    return undefined;
  else{
    // If there is a grandparent, then check the grandparents 2 children
      // the children needs to be different from the parent (hence an uncle)
    var parent = this.getParent();
    var grandParent = this.getGrandParent();
    if(grandParent.left !== parent && grandParent.left !== null)
      return grandParent.left;
    else if(grandParent.right !== parent && grandParent.right !== null)
      return grandParent.right;
    else
      return undefined;
  }
}

// toJSON for D3-tree friendly format

Node.prototype.toJSON = function() {
  var json = {};
  json.name = '' + this.value;

  if (!this.isRoot())
    json.parent = '' + this.parent.value;
  if (!this.isLeaf())
    json.children = [this.left.toJSON(), this.right.toJSON()];

  return json;
}
