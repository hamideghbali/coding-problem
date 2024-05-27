// Three points A, B, C are given on the real axis, the point C is located between the points A and B. Find the product of the length of AC and the length of BC.

// Function to calculate the product of the lengths of line segments AC and BC
function calculateProductOfLengths(A, B, C) {
    // Calculate the lengths of line segments AC and BC
    const lengthAC = Math.abs(C - A);
    const lengthBC = Math.abs(B - C);
    
    // Calculate the product of the lengths
    const product = lengthAC * lengthBC;
    
    // Return the product
    return product;
  }
  
  // Example usage:
  const A = 3; // You can change this value to any x-coordinate
  const B = 8; // You can change this value to any x-coordinate
  const C = 6; // You can change this value to any x-coordinate between A and B
  const product = calculateProductOfLengths(A, B, C);
  
  console.log(`The product of the lengths of AC and BC is ${product}.`);
  