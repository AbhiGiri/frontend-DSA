// // Problem Statement:: 
// // Given an undirected graph with V vertices. 
// // We say two vertices u and v belong to a single province, if there is a path from u to v or v to u. 
// // Your task is to Find the number of provinces?

// // Pre-req: Connected Components, Graph traversal techniques

// // A province is a group of directly or indirectly connected cities and no other cities outside of the group. 
// // Considering the above example, we can go from 1 to 2 as well as to 3, from every other node in a province 
// // we can go to each other. As we cannot go from 2 to 4 so it is not a province. We know about both the traversals, 
// // Breadth First Search (BFS) and Depth First Search (DFS). 
// // We can use any of the traversals to solve this problem because a traversal algorithm visits all the nodes in a graph. 
// // In any traversal technique, we have one starting node, and it traverses all the nodes in the graph. 
// // Suppose there is an ‘N’ number of provinces so we need to call the traversal algorithm ‘N‘ times, i.e., 
// // there will be ‘N’ starting nodes. So, we just need to figure out the number of starting nodes.

// //// The algorithm steps are as follows:

// // We need a visited array initialized to 0, representing the nodes that are not visited.
// // Run the for loop looping from 0 to N, and call the DFS for the first unvisited node. 
// // DFS function call will make sure that it starts the DFS call from that unvisited node, 
// // and visits all the nodes that are in that province, and at the same time, it will also mark them as visited. 
// // Since the nodes traveled in a traversal will be marked as visited, they will no further be called for any further DFS traversal. 
// // Keep repeating these steps, for every node that you find unvisited, and visit the entire province. 
// // Add a counter variable to count the number of times the DFS function is called, as in this way we can count 
// // the total number of starting nodes, which will give us the number of provinces.




// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   };

//   addVertex(vertex) {
//     if(!this.adjacencyList[vertex]) {
//       // this.adjacencyList[vertex] = new Set();
//       this.adjacencyList[vertex] = [];

//     }
//   };

//   addEdge(vertex1, vertex2) {
//     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
//       return 'vertex not found.'
//     };

//     // this.adjacencyList[vertex1].add(vertex2);
//     // this.adjacencyList[vertex2].add(vertex1);
//     this.adjacencyList[vertex1].push(vertex2);
//     this.adjacencyList[vertex2].push(vertex1);
//   };

//   removeEdge(vertex1, vertex2) {
//     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
//       return 'vertex not found.'
//     };

//     this.adjacencyList[vertex1].delete(vertex2);
//     this.adjacencyList[vertex2].delete(vertex1);
//   };

//   removeVertex(vertex) {
//     if(!this.adjacencyList[vertex]) {
//       return 'vertex not found.'
//     };

//     for(let adjacentVertex of this.adjacencyList[vertex]) {
//       this.removeEdge(vertex, adjacentVertex);
//     };

//     delete this.adjacencyList[vertex];
//   };

//   breadthFirstSearch(start) {
//     const queue = [start];
//     const visited = {};
//     const bfs = [];

//     let currentVertex
//     visited[start] = true; // “starting” node, mark it as visited, and push it into the queue

//     while(queue.length) {
//       currentVertex = queue.shift();
//       bfs.push(currentVertex);

//       for(let neighbor of this.adjacencyList[currentVertex]) {
//         if(!visited[neighbor]) {
//           visited[neighbor] = true;
//           queue.push(neighbor); // and push it into the queue
//         }
//       }
//     };
//     return bfs;
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


//   display() {
//     for(let vertex in this.adjacencyList) {
//       console.log(vertex + ' --> ' + [...this.adjacencyList[vertex]])
//     }
//   };

// };

// const graph = new Graph();
// graph.addVertex('P');
// graph.addVertex('Q');
// graph.addVertex('R');
// graph.addVertex('S');

// graph.addEdge('P', 'Q');
// graph.addEdge('P', 'R');
// graph.addEdge('Q', 'S');

// // graph.display();
// // console.log('..............')
// // graph.removeEdge('Q', 'S');
// // graph.removeVertex('S');
// // graph.display();
// // console.log(graph.breadthFirstSearch('P')); // [ 'P', 'Q', 'R', 'S' ]
// console.log(graph.depthFirstSearchIterative('P'));

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // for undirected graph
  }

  bsf(start) { // Level Order Traversal
    const queue = [start];    // Queue data structure: follows FIFO, and will always contain the starting.
    const visited = {};       // Visited array: an array initialized to 0
    const result = [];

    visited[start] = true;    // In BFS, we start with a “starting” node, mark it as visited, and push it into the queue data structure.
    let currentVertex;

    while (queue.length) {     // Repeat steps 2 and 3 until the queue becomes empty, and this way you can easily traverse all the nodes in the graph.
      currentVertex = queue.shift(); // In every iteration, we pop out the node ‘v’ and 
      result.push(currentVertex);    // put it in the solution vector, as we are traversing this node.

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) { // All the unvisited adjacent nodes from ‘v’ are visited next and 
          visited[neighbor] = true;
          queue.push(neighbor); // are pushed into the queue. The list of adjacent neighbors of the node can be accessed from the adjacency list.
        }
      })
    }
    return result;
  };

  dfsRecursive(startVertex) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(startVertex);
    return result;
  }

  dfsIterative(startVertex) {
    const stack = [startVertex];
    const visited = {};
    const result = [];

    visited[startVertex] = true;

    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

};

const graph = new Graph();
graph.addVertex('P');
graph.addVertex('Q');
graph.addVertex('R');
graph.addVertex('S');

graph.addEdge('P', 'Q');
graph.addEdge('P', 'R');
graph.addEdge('Q', 'S');

// console.log("BFS : ", graph.bsf("Q"));
// console.log("DFS Iterative:", graph.dfsIterative("P"));
// console.log("DFS Recursive:", graph.dfsRecursive("P"));

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
};

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
};

const graphh = {
  // 'P': ['Q'],
  // 'Q': ['P', 'S'],
  // 'R': [],
  // 'S': ['Q']
  '0': ['1'],
  '1': ['0', '2'],
  '2': ['1'],
  '3': ['4'],
  '4': ['3']
}
console.log(numProvinces(graphh)); 
// Output: 1 (one province : {P, Q, R, S})
// Output: 2 (Two provinces: {0, 1, 2} and {3, 4})