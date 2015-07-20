Node.prototype.isLeaf = function(){

}

Node.prototype.isRoot = function(){

}

Node.prototype.toggleColor = function(){

}

Node.prototype.setChild = function(){

}

Node.prototype.setParent = function(){

}

Node.prototype.toJSON = function() {
  var json = {};
  json.name = ''+this.value;
  if (!this.isRoot()) json.parent = this.parent.keys.toString();
  if (!this.isLeaf()) {
    json.children = [];
    this.children.forEach(function(child, index){
      json.children.push(child.toJSON());
    });
  }
  return json;
}
