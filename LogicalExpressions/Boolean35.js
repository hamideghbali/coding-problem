// Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in
//     the range 1 to 8), verify the following proposition: ―Both of the given
//     chessboard squares have the same color‖.

// Function to verify if both chessboard squares have the same color
function sameColorSquares(x1, y1, x2, y2) {
    // Check if the sum of row number (x) and column number (y) is even for both squares
    const isEven1 = (x1 + y1) % 2 === 0;
    const isEven2 = (x2 + y2) % 2 === 0;
  
    // Check if both squares have the same color
    return isEven1 === isEven2;
  }
  
  // Example usage:
  const x1 = 3; // Example x-coordinate of square 1
  const y1 = 5; // Example y-coordinate of square 1
  const x2 = 4; // Example x-coordinate of square 2
  const y2 = 7; // Example y-coordinate of square 2
  
  const result = sameColorSquares(x1, y1, x2, y2);
  
  if (result) {
    console.log(`Both of the given chessboard squares have the same color.`);
  } else {
    console.log(`The given chessboard squares do not have the same color.`);
  }
  