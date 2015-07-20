// General utility
function error(str){ console.log("ERROR : ", str) };
exists = function (x){ return x != null };
truthy = function (x){ return x!== false && exist(x) };


// Creates nil node and links it to the provided parent
var createNil = function(parent){
  var returnNode = new Node(null, 'b', null, null, parent);
  return returnNode;
}




// Basic utility functions
Node.prototype.isLeaf = function(){
  return this._left === null && this._right === null && this._value === null;
}

Node.prototype.isRoot = function(){
  return this._parent === null;  // not too sure about this?
}

Node.prototype.toggleColor = function(){
  this._color = this._color === 0 ? 1 : 0;  // toggle the color
}

// Example : this.color('r') sets to red.
//           this.color('red') sets to red
//           this.color(0) sets to red
// this.color() will return the current color
Node.prototype.color = function(colorStr){
  // grab color and leave if no colorStr provided
  if(colorStr === undefined) return this._color === 0 ? "red" : "black";

  // rest of function will set the color depending on the input str
  var inputString = colorStr.toLowerCase();
  var blackStr = ['b','black'];
  var redStr = ['r','red'];

  if(blackStr.indexOf(colorStr) === -1 && redStr.indexOf(colorStr) === -1){
    error("Please enter a valid color");
    return -1; // invalid color return code
  }else{
    if(blackStr.indexOf(colorStr) >= 0) this._color = 1;
    else if(redStr.indexOf(colorStr) >= 0) this._color = 0;
  }
}

// Returns the current color. --- Don't think its necessary to set values
Node.prototype.value = function(newValue){
  if(newValue === undefined){
    return this._value;
  }else{
    if(typeof newValue !== 'number') error("Please enter an integer value for value()");
    this._value = newValue;
  }
}









// Getter/setters of pointers to other nodes
// Left Child
// Example - this.leftChild() returns the current left child
//           this.leftChild(insertNode) will set the this node's _left to the insertNode
Node.prototype.leftChild = function(node){
  if(node === undefined) return this._left;
  else if(node instanceof Node) this._left = node;
  else error("Invalid input type. Must be instanceof Node-class");
}

// Right Child
Node.prototype.rightChild = function(node){
  if(node === undefined) return this._right;
  else if(node instanceof Node) this._right = node;
  else error("Invalid input type. Must be instanceof Node-class");
}

// Parent
Node.prototype.parent = function(node){
  if(node === undefined) return this._parent;
  else if(node instanceof Node) this._parent = node;
  else error("Invalid input type. Must be instanceof Node-class");
}

// Extended Family --------
// Grandparent just fetches the grandparent node
// Returns null if it can't find a grandparent
Node.prototype.grandParent = function(){
  return this.parent() ? this.parent().parent() : null;
} // Don't have a setter for the grand parent, might change this

// Uncle will fetch the uncle if there is one, or return null
Node.prototype.uncle = function(){ // Don't have a setter for the uncle either atm.
  if(this.grandParent() === null)
    return null;
  else{
    // If there is a grandparent, then check the grandparents 2 children
      // the children needs to be different from the parent (hence an uncle)
    var parent = this.parent();
    var grandParent = this.grandParent();
    if(grandParent.leftChild() !== parent && grandParent.leftChild() !== null)
      return grandParent.leftChild();
    else if(grandParent.rightChild() !== parent && grandParent.rightChild() !== null)
      return grandParent.rightChild();
    else
      return null;
  }
}

// Existence helper functions
Node.prototype.hasLeftChild = function(){
  return exists(this.leftChild());
}

Node.prototype.hasRightChild = function(){
  return exists(this.RightChild());
}

Node.prototype.hasParent = function(){
  return exists(this.parent());
}

Node.prototype.hasGrandParent = function(){
  return exists(this.grandParent());
}

Node.prototype.hasUncle = function(){
  return exists(this.hasUncle());
}


// Rewiring Utility functions


// toJSON for D3-tree friendly format

Node.prototype.toJSON = function() {
  var json = {};
  json.name = '' + this.value();

  if (!this.isRoot())
    json.parent = '' + this.parent().value();
  if (!this.isLeaf())
    json.children = [this.leftChild().toJSON(), this.rightChild().toJSON()];

  return json;
}
