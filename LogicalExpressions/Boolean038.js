// Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in
//     the range 1 to 8), verify the following proposition: ―A bishop can move from
//     one square to another during one turn‖.

// Function to verify if a bishop can move from one square to another during one turn
function canMoveBishop(x1, y1, x2, y2) {
    // Calculate the absolute difference in row numbers and column numbers
    const deltaX = Math.abs(x2 - x1);
    const deltaY = Math.abs(y2 - y1);
  
    // Check if the absolute differences in row numbers and column numbers are equal
    return deltaX === deltaY;
  }
  
  // Example usage:
  const x1 = 3; // Example x-coordinate of square 1
  const y1 = 5; // Example y-coordinate of square 1
  const x2 = 6; // Example x-coordinate of square 2
  const y2 = 2; // Example y-coordinate of square 2
  
  const result = canMoveBishop(x1, y1, x2, y2);
  
  if (result) {
    console.log(`A bishop can move from (${x1}, ${y1}) to (${x2}, ${y2}) during one turn.`);
  } else {
    console.log(`A bishop cannot move from (${x1}, ${y1}) to (${x2}, ${y2}) during one turn.`);
  }
  