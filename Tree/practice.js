//// [1]. Height of Binary Tree (Max Depth)
// Ques. Given a Binary Tree, find its height?
// height = longest path b/w root node & a leaf node.
//  max(h1, h2) + 1

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// };

// function findHeight(root) {
//   if(!root) 
//     // return -1;
//     return 0;

//   const leftHeight = findHeight(root.left);
//   const rightHeight = findHeight(root.right);
//   return Math.max(leftHeight, rightHeight)  + 1
// };

// const root = new Node(1);
// root.left  = new Node(2);
// root.right = new Node(3);
// root.left.left  = new Node(4);
// root.left.right = new Node(5);
// console.log(findHeight(root));
// T.C. 0(n)
// S.C. 0(height) || 0(n) scruteny


//// [2]. Diameter of Binary Tree
// Longest path b/w any 2 nodes (no. of nodes) Width

//// Approach #1 O(n^2)
// function diameterOfBTree(root) {
//   if(!root) {
//     return 0;
//   }

//   const heightOfLeft  = findHeight(root.left)
//   const heightOfRight = findHeight(root.right)

//   const diameterOfLeft  = diameterOfBTree(root.left)
//   const diameterOfRight = diameterOfBTree(root.right)

//   return Math.max(
//     diameterOfLeft, 
//     diameterOfRight,
//     heightOfLeft + heightOfRight + 1
//   )
// };

// const root     = new Node(1)
// root.left      = new Node(2)
// root.right     = new Node(3)
// root.left.left = new Node(4)
// console.log(diameterOfBTree(root))

//// Approach #2 O(n)
// function diameterOfBTree(root) {
//   if(!root) {
//     return 0;
//   }
//   return diameterAndHeight(root).diameter
// };

// function diameterAndHeight(root) {
//   if(!root) {
//     return {diameter: 0, height: 0}
//   }

//   const leftResult  = diameterAndHeight(root.left)
//   const rightResult = diameterAndHeight(root.right)
//   const diameterThroughCurrent = leftResult.height + rightResult.height

//   const currentDiameter = Math.max(leftResult.diameter, rightResult.diameter, diameterThroughCurrent);
//   const currentHeight   = Math.max(leftResult.height, rightResult.height) + 1

//   return { diameter: currentDiameter, height: currentHeight}
// };

// const root     = new Node(1)
// root.left      = new Node(2)
// root.right     = new Node(3)
// root.left.left = new Node(4)
// console.log(diameterOfBTree(root))


//// [3]. Check for Balanced Tree********************

// Approach #1 O(n^2)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// };

// function isBalanced(root) {
//   if(!root) return true;

//   const left = isBalanced(root.left)
//   const right = isBalanced(root.right)
//   const diff = Math.abs(findHeight(left) - findHeight(right)) <= 1

//   if(left && right && diff) {
//     return true
//   } else {

//     return false
//   }
// };

// function findHeight(root) {
//   if(!root) return 0
//   const leftHeight = findHeight(root.left)
//   const rightHeight = findHeight(root.right)
//   return Math.max(leftHeight, rightHeight) + 1
// };


//// Approach #2 O(n)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// };

// function isBalanced(root) {
//   const { balanced } = getHeightAndBalance(root);
//   return balanced;
// };

// function getHeightAndBalance(node) {
//   if(!node) {
//     return { height: 0, balanced: true};
//   }
//   // check Height & Left balanced subtree
//   const left = getHeightAndBalance(node.left);
//   if(!left.balanced) return { height: 0, balanced: false};

//   // check Height & Right balanced subtree
//   const right = getHeightAndBalance(node.right);
//   if(!right.balanced) return { height: 0, balanced: false };

//   // check balance for current node
//   const balanced = Math.abs(left.height - right.height) <= 1
//   const height = Math.max(left.height, right.height) + 1;

//   return { height, balanced };
// };

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.right = new Node(4);
// root.left.left = new Node(5);
// root.right.left = new Node(6);
// root.right.left.left = new Node(7);
// console.log(isBalanced(root));


//// [4]. Identical Tree********************
// Determine if Two Trees are identical

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// function isIdentical(r1, r2) {
//   if (!r1 && !r2) return true;

//   if (!r1 || !r2) return false;

//   if (r1.value !== r2.value) return false;

//   return isIdentical(r1.left, r2.left) && isIdentical(r1.right, r2.right);
// }

// const root1 = new Node(1)
// root1.left = new Node(2)
// root1.right = new Node(3)
// const root2 = new Node(1)
// root2.left = new Node(2)
// root2.right = new Node(4)
// console.log(isIdentical(root1, root2));


//// [5]. Sum Tree (root = left + right) ********************

// Approach #1 using Recursive t.c O(n) s.c O(log n)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function isBinarySumTree(node) {
//   if (!node) return true;
//   if (!node.left && !node.right) return true;

//   let leftSum = 0;
//   let rightSum = 0;

//   if(node.left) {
//     leftSum = node.left.value;
//     console.log(leftSum)
//     if(!isBinarySumTree(node.left)) 
//       return false;
//   };

//   if(node.right) {
//     rightSum = node.right.value;
//     if(!isBinarySumTree(node.right)) 
//       return false;
//   };

//   return node.value == leftSum + rightSum;
// };

// const root = new Node(10);
// root.left = new Node(4);
// root.right = new Node(6);
// root.left.left = new Node(1);
// root.left.right = new Node(3);
// root.right.right = new Node(6);

// console.log(isBinarySumTree(root)); 


//// Approach #2 using Iterative t.c O(n) s.c O(1)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function isBinarySumTree(root) {
//   if (!root) return true;

//   const queue = [root];

//   while (queue.length) {
//     const node = queue.shift();

//     let sum = 0;
//     if (node.left) {
//       queue.push(node.left);
//       sum += node.left.value;
//     }
//     if (node.right) {
//       queue.push(node.right);
//       sum += node.right.value;
//     }

//     if (node.left || node.right) {
//       if (node.value !== sum) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// const root = new Node(10);
// root.left = new Node(4);
// root.right = new Node(6);
// root.left.left = new Node(1);
// root.left.right = new Node(3);
// root.right.right = new Node(6);

// console.log(isBinarySumTree(root)); 


//// [6]. Zig Zag Traversal *********************

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// };

// function zigzagTraversal(root) {
//   if(!root) return [];

//   const result = [];
//   const queue = [root];
//   let leftToRight = true;

//   while(queue.length) {
//     const levelSize = queue.length;
//     const currentLevel = [];

//     for(let i = 0; i < levelSize; i++) {
//       const node = queue.shift();
//       currentLevel.push(node.value);

//       if(node.left)  queue.push(node.left);
//       if(node.right) queue.push(node.right);

//     };

//     if(!leftToRight) {
//       currentLevel.reverse()
//     };

//     result.push(currentLevel);
//     leftToRight = !leftToRight;
//   };

//   return result;
// };


// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// console.log(zigzagTraversal(root));


//// [7]. Boundary Traversal of Binary Tree *********************

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// };

// function printLeftBoundary(node, result) {
//   if(!node) return;
//   if(node.left) {
//     result.push(node.value); // Add left boundary node value to result
//     printLeftBoundary(node.left, result);
//   } else if(node.right) {
//     result.push(node.value); // Add left boundary node value to result if no left child
//     printLeftBoundary(node.right, result);
//   }
// };

// function printLeaves(node, result) {
//   if(!node) return result;
//   printLeaves(node.left, result);
//   if(!node.left && !node.right) {
//     result.push(node.value);
//   };
//   printLeaves(node.right, result);
// };

// function printRightBoundary(node, result){
//   if(!node) return result;
//   if(node.right) {
//     printRightBoundary(node.right, result);
//     result.push(node.value);
//   } else if(node.left) {
//     printRightBoundary(node.left, result);
//     result.push(node.value);
//   }
// };

// function boundaryTraversal(root) {
//   if(!root) return [];
//   const result = [root.value]; // Add root node value to result

//   // 1. Print left boundary (excluding root and leaves)
//   printLeftBoundary(root.left, result); 

//   // 2. Print leaves (left to right)
//   printLeaves(root.left, result);
//   printLeaves(root.right, result);

//   // 3. Print right boundary (excluding root and leaves)
//   printRightBoundary(root.right, result);

//   return result;
// };

// const root = new Node(20);
// root.left  = new Node(8);
// root.right = new Node(22);
// root.left.left  = new Node(4);
// root.left.right = new Node(12);
// root.left.right.left  = new Node(10);
// root.left.right.right = new Node(14);
// root.right.right = new Node(25);

// console.log(boundaryTraversal(root)); // Output: [20, 8, 4, 10, 14, 25, 22]


//// [8]. Vertical Traversal of Binary Tree
// **Vertical traversal of a binary tree involves printing the nodes of the tree in vertical order,
// where nodes at the same horizontal distance from the root are printed on the same vertical line. 
// Nodes on the left side of the tree are considered to be at a negative horizontal distance, 
// while nodes on the right side are considered to be at a positive horizontal distance.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.horizontalDistance = 0;
  }
};

function verticalTraversal(root) {
  if (!root) return [];

  const result = [];
  // initilize the queue with root node and its horizontalDistance
  const queue = [{ node: root, horizontalDistance: 0 }];

  // Use Map to group nodes by their horizontal distance
  const map = new Map();

  while (queue.length) {
    const { node, horizontalDistance } = queue.shift();

    if (!map.has(horizontalDistance)) {
      map.set(horizontalDistance, []);
    }

    // Add node value to corresponding horizontal distance group
    map.get(horizontalDistance).push(node.value);

    if (node.left) {
      node.left.horizontalDistance = horizontalDistance - 1;
      queue.push({ node: node.left, horizontalDistance: horizontalDistance - 1 });
    }

    if (node.right) {
      node.right.horizontalDistance = horizontalDistance + 1;
      queue.push({ node: node.right, horizontalDistance: horizontalDistance + 1 });
    }
  };

  // sort the map by keys [horizontal Distances] in Ascending Order
  const sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

  // Extract the node values from the sortedMap, and add them to result[]
  for (const [horizontalDistance, nodes] of sortedMap.entries()) {
    result.push(nodes);
  }

  return result;
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(verticalTraversal(root)); // Output: [[4], [2], [1, 5, 6], [3], [7]]
