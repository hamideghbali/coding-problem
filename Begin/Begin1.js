// Given the side a of a square, find the perimeter P of the square: P = 4·a.

// Function to calculate the perimeter of a square
function calculatePerimeter(sideLength) {
    // Calculate the perimeter
    const perimeter = 4 * sideLength;
    
    // Return the perimeter
    return perimeter;
  }
  
  // Example usage:
  const side = 8; // You can change this value to any side length
  const perimeter = calculatePerimeter(side);
  
  console.log(`The perimeter of a square with side length ${side} is ${perimeter}.`);
  