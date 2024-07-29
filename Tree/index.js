class Node {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  };

  insert(value) {
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  insertNode(root, newNode) {
    if(newNode.value < root.value) {
      if(root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if(root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  };

  search(root, value) {
    if(!root) {
      return false;
    } else {
      if(root.value === value) {
        return true;
      } else if(value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  };

  // Tree Traversal
  // Depth First Search :: The DFS algorithm starts at the root node, and explores as far as possible along each branch before backtracking.
  // visit the root node,
  // visit all the nodes in the left subtree
  // visit all the nodes in the right subtree
  // 3 Types of DFS Traversal ::
  // i). Pre-order   :: visit root, left subtree, right subtree
  // ii). In-order   :: visit left Subtree, root, right subtree
  // iii). Post-order:: visit left Subtree, right subtree, root,

  // Pre-order 
  preOrder(root) {
    if(root) {
      console.log(root.value)
      this.preOrder(root.right)
      this.preOrder(root.left);
    }
  };
  
  // In-order
  inOrder(root) {
    if(root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right)
    }
  };

  // post-order
  postOrder(root) {
    if(root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  };

  // Breadth First Search
  // i).   Create a queue
  // ii).  Enqueue root node
  // iii). ALA node exists in the queue
  // a). Dequeue node from front
  // b). Read node's value
  // c). Enqueue node's left child if it exists
  // d). Enqueue node's right child if it exists

  leverOrder() {
    // use the optimized queue implementation
    const queue = [];
    queue.push(this.root);
    while(queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if(curr.left) {
        queue.push(curr.left);
      };
      if(curr.right) {
        queue.push(curr.right);
      };
    }
  };

  min(root) {
    if(!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  };

  max(root) {
    if(!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  };

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if(root === null) {
      return root;
    };
    if(value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if(value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if(!root.left && !root.right) {
        return null
      } 
      if(!root.left) {
        return root.right;
      } else if(!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value)
    }
    return root;
  };


};

const BST = new BinarySearchTree();
console.log(`BST is :  ${BST.isEmpty()}`);

BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);
// BST.insert(7);

// console.log(BST.search(BST.root, 10))
// console.log(BST.search(BST.root, 15))
// console.log(BST.search(BST.root, 5))
// console.log(BST.search(BST.root, 25))

// BST.preOrder(BST.root);
// BST.inOrder(BST.root);
// BST.postOrder(BST.root);

// BST.leverOrder();

// console.log(BST.min(BST.root));
// console.log(BST.max(BST.root));

// BST.leverOrder();
// BST.delete(10);
// BST.delete(3);
// BST.leverOrder();

