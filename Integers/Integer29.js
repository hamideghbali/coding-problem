// Three positive integers A, B, C are given. A rectangle of the size A × B
// contains the greatest possible amount of inside squares with the side length C
// (without overlaps). Find the amount of squares placed on the rectangle and the
// area of unused part of the rectangle.

// Function to find the number of squares placed on the rectangle and the area of the unused part
function squaresAndUnusedArea(A, B, C) {
    // Calculate the number of squares that can fit horizontally and vertically
    const horizontalSquares = Math.floor(A / C);
    const verticalSquares = Math.floor(B / C);
  
    // Take the minimum of the two values to ensure that the squares fit without overlap
    const numSquares = horizontalSquares * verticalSquares;
  
    // Calculate the area of the rectangle and the area occupied by the squares
    const rectangleArea = A * B;
    const squaresArea = numSquares * (C * C);
  
    // Calculate the area of the unused part of the rectangle
    const unusedArea = rectangleArea - squaresArea;
  
    // Return the result
    return [numSquares, unusedArea];
  }
  
  // Example usage:
  const A = 8; // Width of the rectangle
  const B = 6; // Height of the rectangle
  const C = 2; // Side length of the squares
  const [numSquares, unusedArea] = squaresAndUnusedArea(A, B, C);
  
  console.log(`Number of squares placed on the rectangle: ${numSquares}`);
  console.log(`Area of unused part of the rectangle: ${unusedArea}`);
  