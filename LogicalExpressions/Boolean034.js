// Given coordinates x, y of a chessboard square (as integers in the range 1
//     to 8), verify the following proposition: ―The chessboard square (x, y) is white‖.
//     Note that the left bottom square (1, 1) is black.

// Function to verify if a chessboard square (x, y) is white
function isWhiteSquare(x, y) {
    // Check if the sum of row number (x) and column number (y) is even
    return (x + y) % 2 === 0;
  }
  
  // Example usage:
  const x = 3; // Example x-coordinate
  const y = 5; // Example y-coordinate
  
  const result = isWhiteSquare(x, y);
  
  if (result) {
    console.log(`The chessboard square (${x}, ${y}) is white.`);
  } else {
    console.log(`The chessboard square (${x}, ${y}) is not white.`);
  }
  