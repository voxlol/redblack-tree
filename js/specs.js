describe("Node Helper/Utility functions", function(){
  var tree;
  beforeEach(function(){
    tree = new RedBlackTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
  });

  describe("isLeaf", function(){
    it("should properly identify leaf(nil) nodes", function(){
      expect(tree.root.leftChild().leftChild().isLeaf()).toEqual(true);
      expect(tree.root.leftChild().isLeaf()).toEqual(false);
      expect(tree.root.rightChild().isLeaf()).toEqual(false);
      expect(tree.root.rightChild().rightChild().isLeaf()).toEqual(true);
    });
  });

  describe("isRoot", function(){
    it("should properly identify root node", function(){
      expect(tree.root.leftChild().leftChild().isRoot()).toEqual(false);
      expect(tree.root.rightChild().isRoot()).toEqual(false);
      expect(tree.root.leftChild().isRoot()).toEqual(false);
      expect(tree.root.rightChild().isRoot()).toEqual(false);
      expect(tree.root.isRoot()).toEqual(true);
    });
  });

  describe("toggleColor", function(){
    it("should properly toggle color from red to black", function(){
      expect(tree.root.leftChild().color()).toEqual('red');
      expect(tree.root.leftChild().toggleColor().color()).toEqual('black');
      expect(tree.root.leftChild().toggleColor().color()).toEqual('red');
    });
  });

});


describe('RBNode get/set helpers', function(){
  var tree;

  beforeEach(function(){
    tree = new RedBlackTree();
  })

  describe('leftChild', function(){
    it('should be able to retrive the leftChild', function(){
      tree.insert(10);
      tree.insert(5);
      expect(tree.root.leftChild()).toEqual(tree.root._left);
      expect(tree.root.leftChild()._value).toEqual(5);
    });

    it('should be able to set the leftChild', function(){
      tree.insert(10);
      var insertNode = new Node(7, 'r');
      expect(tree.root.leftChild(insertNode).leftChild()).toEqual(insertNode);
      expect(tree.root.leftChild().value()).toEqual(7);
    });

    it('should create a link back to the parent', function(){
      tree.insert(10);
      var insertNode = new Node(7, 'r');
      expect(tree.root.leftChild(insertNode).leftChild().parent()).toEqual(tree.root);
    });
  });

  describe('rightChild', function(){
    it('should be able to retrive the rightChild', function(){
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      expect(tree.root.rightChild()).toEqual(tree.root._right);
      expect(tree.root.rightChild()._value).toEqual(15);
    });

    it('should be able to set the rightChild', function(){
      tree.insert(10);
      var insertNode = new Node(15, 'r');
      expect(tree.root.rightChild(insertNode).rightChild()).toEqual(insertNode);
      expect(tree.root.rightChild().value()).toEqual(15);
    });

    it('should create a link back to the parent', function(){
      tree.insert(10);
      var insertNode = new Node(12, 'r');
      expect(tree.root.rightChild(insertNode).rightChild().parent()).toEqual(tree.root);
    });
  });
})