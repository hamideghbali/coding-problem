// Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in
//     the range 1 to 8), verify the following proposition: ―A queen can move from
//     one square to another during one turn‖.

// Function to verify if a queen can move from one square to another during one turn
function canMoveQueen(x1, y1, x2, y2) {
    // Check if the squares are on the same row, column, or diagonal
    return x1 === x2 || y1 === y2 || Math.abs(x2 - x1) === Math.abs(y2 - y1);
  }
  
  // Example usage:
  const x1 = 3; // Example x-coordinate of square 1
  const y1 = 5; // Example y-coordinate of square 1
  const x2 = 6; // Example x-coordinate of square 2
  const y2 = 5; // Example y-coordinate of square 2
  
  const result = canMoveQueen(x1, y1, x2, y2);
  
  if (result) {
    console.log(`A queen can move from (${x1}, ${y1}) to (${x2}, ${y2}) during one turn.`);
  } else {
    console.log(`A queen cannot move from (${x1}, ${y1}) to (${x2}, ${y2}) during one turn.`);
  }
  