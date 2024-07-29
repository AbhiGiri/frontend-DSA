//// Rotten Oranges :: Min time to rot all oranges : BFS

// Problem Statement:: You will be given an m x n grid, where each cell has the following values : 

// 2  -  represents a rotten orange
// 1  -  represents a Fresh orange
// 0  -  represents an Empty Cell

// Every minute, if a Fresh Orange is adjacent to a Rotten Orange in 4-direction ( upward, downwards, right, and left ) 
// it becomes Rotten. 

// Return the minimum number of minutes required such that none of the cells has a Fresh Orange. 
// Use BFS to spread the rot to adjacent fresh oranges, counting the minutes as you go.
// If at the end there are still fresh oranges left, return -1.

// Example 1:

// Input: grid - [ [2,1,1] , [0,1,1] , [1,0,1] ]

// Output: -1

// function rottenOrange(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right

//   const queue = []; // Initialize a queue and enqueue all initially rotten oranges.
//   let freshOranges = 0;

//   // initilize the queue with all rotten oranges
//   // Count the number of fresh oranges and push the rotten oranges' coordinates into the queue
//   for (let r = 0; r < rows; r++) {  // Initialization: Iterate through the grid to find
//     for (let c = 0; c < cols; c++) {
//       if (grid[r][c] === 2) {       //  all rotten oranges (value 2) and enqueue them. Also, 
//         queue.push([r, c]);
//       } else if (grid[r][c] === 1) {// count the number of fresh oranges (value 1).
//         freshOranges++;
//       }
//     }
//   };

//   // Early exit if there is no fresh orange.
//   if(freshOranges === 0) return 0;

//   let minutes = 0;

//   // BFS traversal // BFS Process: For each minute (level in BFS), process all currently rotten oranges in the queue:
//   while (queue.length) {
//     let size = queue.length;
//     let newRotten = false;

//     for (let i = 0; i < size; i++) {
//       const [r, c] = queue.shift();

//       for (const [dr, dc] of directions) {
//         const newRow = r + dr;
//         const newCol = c + dc;

//         if (
//           newRow >= 0 && newRow < rows &&
//           newCol >= 0 && newCol < cols &&
//           grid[newRow][newCol] === 1  // If a fresh orange gets infected,
//         ) {
//           grid[newRow][newCol] = 2;     // For each rotten orange, try to infect adjacent fresh oranges.
//           queue.push([newRow, newCol]); // mark it as rotten, add it to the queue, and
//           freshOranges--;               // decrement the count of fresh oranges.
//           newRotten = true;
//         }
//       }
//     }
//     if(newRotten) {
//       minutes++;
//     };
//   };

//   // End Condition: After processing all levels, check if there are any fresh oranges left:
//   // If no fresh oranges are left, return the number of minutes. If fresh oranges remain, return -1 indicating it's impossible to rot all oranges.
//   return freshOranges === 0 ? minutes : -1;

  
// };

// const grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1]
// ];

// console.log(rottenOrange(grid));


// ____________________________________________________________

// 1. Define a function to solve the Rotten Oranges problem
function orangesRotting(grid) {
  // 2. Get the number of rows and columns in the grid
  const rows = grid.length;
  const cols = grid[0].length;

  // 3. Define the directions for moving (right, down, left, up)
  const directions = [
    [0, 1],  // right
    [1, 0],  // down
    [0, -1], // left
    [-1, 0]  // up
];

  // 4. Initialize a queue, to store the positions of rotten oranges.
  const queue = [];

  // 5. Initialize a counter to track the number of fresh oranges
  let freshOranges = 0;

  // 6. Iterate through the grid, to populate the queue, and count fresh oranges.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 2) {
          // 6.1. Add the position of rotten oranges to the queue
          queue.push([r, c]);
        } else if (grid[r][c] === 1) {
          // 6.2. Increment the counter if the cell contains a fresh orange
          freshOranges++;
      }
    }
  };
  
  // 7. If there are no fresh oranges initially, return 0;
  if (freshOranges === 0) return 0;

  // 8. Initialize a variable to track the number of minutes taken.
    let minutes = 0;

  // 9. Perform BFS traversal until the queue is empty.
  while (queue.length > 0) {  
    // 9.1. Get the number/size of rotten oranges, to process at the current minute;
    let size = queue.length;

    // 9.2. Initialize a flag to track if any new oranges rot in this minute;
    let newRotten = false;

    // 9.3. Process all rotten oranges at the current minute.
    for (let i = 0; i < size; i++) {
      // 9.3.1. Dequeue the position of the current rotten orange.
      const [r, c] = queue.shift();

      // 9.3.2. Check all four directions for adjacent fresh oranges.
      for (const [dr, dc] of directions) {
        // 9.3.2.1. Calculate the new position.
        const newRow = r + dr;
        const newCol = c + dc;

         // 9.3.2.2. Check if the new position is within the grid bounds
         if (newRow >= 0 && newRow < rows &&
             newCol >= 0 && newCol < cols &&
             grid[newRow][newCol] === 1
            ) {
          // 9.3.2.2.1. If a fresh orange is found, rot it.
          grid[newRow][newCol] = 2;
          // 9.3.2.2.2. Add the new rotten orange to the queue.
          queue.push([newRow, newCol]);
          // 9.3.2.2.3. Decrement the counter for fresh oranges
          freshOranges--;
          // 9.3.2.2.4. Set the flag to true as at least one orange rots in this minute
          newRotten = true;
        }  
      }
    }
    // 9.4. If any new oranges rot in this minute, increment the minute counter
    if (newRotten) minutes++; 
  };

  // 10. If there are no fresh oranges left, return the number of minutes taken
  // Otherwise, return -1 indicating it's impossible to rot all oranges
  return freshOranges === 0 ? minutes : -1;
};

const grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
];

console.log(orangesRotting(grid)); // Output: -1 (IT IS NOT POSSIBLE TO ROT ALL THE ORANGES.)