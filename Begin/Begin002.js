// Given the side a of a square, find the area S of the square: S = a^2

// Function to calculate the area of a square
function calculateArea(sideLength) {
    // Calculate the area
    const area = sideLength * sideLength; // or sideLength ** 2
    
    // Return the area
    return area;
  }
  
  // Example usage:
  const side = 7; // You can change this value to any side length
  const area = calculateArea(side);
  
  console.log(`The area of a square with side length ${side} is ${area}.`);
  