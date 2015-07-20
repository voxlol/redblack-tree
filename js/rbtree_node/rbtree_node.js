// NODE CLASS

var Node = function(value, startColor, leftNode, rightNode, parent){
  this._value = value || null;
  this._left = leftNode || null;
  this._right = rightNode || null;
  this._parent = parent || null;
  initColor.call(this, startColor);

  function initColor(startColor){
    // This just lets us be able to set the startColor using either numbers or strings
    if(startColor === 0 || startColor === 1)
      this._color = startColor;
    else if(typeof startColor === 'string'){
      if(this.color(startColor) === -1) this._color = color.black;
    }else
      this._color = color.black;
  }
}

// Basic Insertion
Node.prototype.insert = function(insertNode){
  if(insertNode.value() > this.value()) {        // insertNode is greater in value
    if(this.rightChild() && this.rightChild().value()) {    // exists & not nil
      insertNode.parent(this.rightChild());
      this.rightChild().insert(insertNode);
    } else {
      insertNode.parent(this);
      this.rightChild(insertNode);
      insertNode.leftChild(createNil(insertNode));
      insertNode.rightChild(createNil(insertNode));
    }
  } else if(insertNode.value() < this.value()) { // insertNode is lower
    if(this.leftChild() && this.leftChild().value()) {   // exists & not nil
      insertNode.parent(this.leftChild());
      this.leftChild().insert(insertNode);
    } else {
      insertNode.parent(this);
      this.leftChild(insertNode);
      insertNode.leftChild(createNil(insertNode));
      insertNode.rightChild(createNil(insertNode));
    }
  } else {
    console.log("invalid value provided");
  }
}
