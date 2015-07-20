// lets setup the d3 first
var svg = d3.select('#canvas').append("svg")
  .attr({ width: "500px", height: "500px"});

//
var tree = d3.layout.tree().size([500,500]);
//var tree_nodes = tree.nodes();
// var links = tree.links(array_of_nodes);
