RedBlackTree.prototype.toJSON = function(value){
  return this.root.toJSON();
}

RedBlackTree.prototype.setRoot = function(rootNode){
  if(rootNode instanceof Node) this.root = rootNode;
}


RedBlackTree.prototype.log = function(){
  // Function to make a pretty log to the console for debugging purposes
}
