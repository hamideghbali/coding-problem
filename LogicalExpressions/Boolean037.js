// Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in
//     the range 1 to 8), verify the following proposition: ―A king can move from one
//     square to another during one turn‖.

// Function to verify if a king can move from one square to another during one turn
function canMoveKing(x1, y1, x2, y2) {
    // Calculate the absolute difference in row numbers and column numbers
    const deltaX = Math.abs(x2 - x1);
    const deltaY = Math.abs(y2 - y1);
  
    // Check if the absolute difference in row numbers and column numbers is at most 1
    return deltaX <= 1 && deltaY <= 1;
  }
  
  // Example usage:
  const x1 = 3; // Example x-coordinate of square 1
  const y1 = 5; // Example y-coordinate of square 1
  const x2 = 4; // Example x-coordinate of square 2
  const y2 = 6; // Example y-coordinate of square 2
  
  const result = canMoveKing(x1, y1, x2, y2);
  
  if (result) {
    console.log(`A king can move from (${x1}, ${y1}) to (${x2}, ${y2}) during one turn.`);
  } else {
    console.log(`A king cannot move from (${x1}, ${y1}) to (${x2}, ${y2}) during one turn.`);
  }
  