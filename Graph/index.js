//// [1]. **** Adjacency Matrix ****

// const matrix = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 0, 0]
// ];

// console.log(matrix[2][2]);


//// [2]. **** Adjacency List ****

// const adjacencyList = {
//   'A': ['B'],
//   'B': ['A', 'C'],
//   'C': ['B']
// };

// console.log(adjacencyList['B']); // ['A', 'C']


//// [3]. ***** Graph *****

// class Graph {
//   constructor () {
//     this.adjacencyList = {};
//   };

//   addVertex(vertex) {
//     if(!this.adjacencyList[vertex]) {
//       // this.adjacencyList[vertex] = [];
//       this.adjacencyList[vertex] = new Set();
//     }
//   };

//   addEdge(vertex1, vertex2) {
//     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
//       return 'Vertex not found.';
//     }
//     // this.adjacencyList[vertex1].push(vertex2);
//     // this.adjacencyList[vertex2].push(vertex1);
//     this.adjacencyList[vertex1].add(vertex2);
//     this.adjacencyList[vertex2].add(vertex1);
//   };

//   display() {
//     for(let vertex in this.adjacencyList) {
//       console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
//     }
//   };

//   hasEdge(vertex1, vertex2) {
//     return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
//   };

//   removeEdge(vertex1, vertex2) {
//     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
//       return 'Vertex not found';
//     }

//     // this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
//     // this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
//     this.adjacencyList[vertex1].delete(vertex2);
//     this.adjacencyList[vertex2].delete(vertex1);
//   };

//   removeVertex(vertex) {
//     if(!this.adjacencyList[vertex]) {
//       return 'vertex not found.'
//     }

//     // while(this.adjacencyList[vertex].length) {
//     //   const adjacentVertex = this.adjacencyList[vertex].pop();
//     //   this.removeEdge(vertex, adjacentVertex);
//     // }

//     for(let adjacentVertex of this.adjacencyList[vertex]) {
//       this.removeEdge(vertex, adjacentVertex);
//     };

//     delete this.adjacencyList[vertex]
//   };


// //// We start the BFS from a given start vertex,
// //// explore its neighbors, and continue exploring until all reachable vertices are visited.
//   breadthFirstSearch(start) { // Level Order Traversal
//     const queue = [start];    // Queue data structure: follows FIFO, and will always contain the starting.
//     const visited = {};       // Visited array: an array initialized to 0
//     const result = [];

//     visited[start] = true;    // In BFS, we start with a “starting” node, mark it as visited, and push it into the queue data structure.
//     let currentVertex;

//     while(queue.length) {     // Repeat steps 2 and 3 until the queue becomes empty, and this way you can easily traverse all the nodes in the graph.
//       currentVertex = queue.shift(); // In every iteration, we pop out the node ‘v’ and 
//       result.push(currentVertex);    // put it in the solution vector, as we are traversing this node.

//       this.adjacencyList[currentVertex].forEach((neighbor) => { 
//         if(!visited[neighbor]) { // All the unvisited adjacent nodes from ‘v’ are visited next and 
//           visited[neighbor] = true;
//           queue.push(neighbor); // are pushed into the queue. The list of adjacent neighbors of the node can be accessed from the adjacency list.
//         }
//       })
//     }
//     return result;
//   };

  
//   depthFirstSearchRecursive(start) {
//     const result = [];
//     const visited = {};
//     const adjacencyList = this.adjacencyList;

//     (function dfs(vertex) {
//       if(!vertex) return null;
//       visited[vertex] = true;
//       result.push(vertex);

//       adjacencyList[vertex].forEach((neighbor) => {
//         if(!visited[neighbor]) {
//           return dfs(neighbor)
//         }
//       })
//     }
//     )(start);

//     return result
//   };

//   depthFirstSearchIterative(start) {
//     const stack = [start];
//     const result = [];
//     const visited = {};
//     let currentVertex;

//     visited[start] = true;

//     while(stack.length) {
//       currentVertex = stack.pop();
//       result.push(currentVertex);

//       this.adjacencyList[currentVertex].forEach((neighbor) => {
//         if(!visited[neighbor]) {
//           visited[neighbor] = true;
//           stack.push(neighbor);
//         }
//       });
//     }
//     return result;
//   };

//   // dfsRecursive(startVertex) {
//   //   result = [];
//   //   visited = {};

//   //   const dfs = (vertex) => {
//   //     if (!vertex) {
//   //       return null;
//   //     };

//   //     visited[vertex] = true;
//   //     result.push(vertex);

//   //     this.adjacencyList[vertex].forEach(neighbor => {
//   //       if (!visited[neighbor]) {
//   //         return dfs(neighbor);
//   //       }
//   //     });
//   //   };

//   //   dfs(startVertex);

//   //   return result;
//   // };

// };

// const graph = new Graph();
//// Add Vertices::
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');


// //// Add Edges::
// graph.addEdge('A', 'D'); 
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// graph.addEdge('C', 'D');
// graph.addVertex('P');
// graph.addVertex('Q');
// graph.addVertex('R');
// graph.addVertex('S');

// graph.addEdge('P', 'Q');
// graph.addEdge('P', 'R');
// graph.addEdge('Q', 'S');

//// (i). Display vertex with edges::
// graph.display();


//// (ii). Check vertex has edge::
// console.log(graph.hasEdge('C', 'D'));


//// (iii).Remove Edge::
// graph.removeEdge('A', 'D');
// graph.display();


//// (iv). Remove Vertex::
// graph.removeVertex('B');
// graph.display();


//// (v). BFS::
// console.log(graph.breadthFirstSearch('A')); //// Time Complexity :: O(N) + O(2E), Where N = Nodes, 2E is for total degrees as we traverse all adjacent nodes.
// console.log(graph.breadthFirstSearch('B')); //// Space Complexity:: O(3N) ~ O(N), Space for queue data structure visited array and an adjacency list

//// (vi). DFS Recursively::
// console.log(graph.depthFirstSearchRecursive('C'));

// console.log(graph.depthFirstSearchIterative('P'));

// console.log(graph.adjacencyList);

function numProvinces(graph) {
  const visited = new Set();
  let provinces = 0;

  for (let vertex in graph) {
      if (!visited.has(vertex)) {
          provinces++;
          bfs(graph, vertex, visited);
      }
  }

  return provinces;
}

function bfs(graph, start, visited) {
  const queue = [start];
  visited.add(start);

  while (queue.length) {
      const current = queue.shift();

      for (let neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
          }
      }
  }
}

const graphh = {
  
  '0': ['1'],
  '1': ['0', '2'],
  '2': ['1'],
  '3': ['4'],
  '4': ['3']
};

console.log(numProvinces(graphh));

