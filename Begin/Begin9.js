// Given two nonnegative numbers a and b, find their geometrical mean (a
//     square root of their product): (a*b)^1/2

// Function to calculate the geometric mean of two nonnegative numbers
function calculateGeometricMean(a, b) {
    const product = a * b;
    const geometricMean = Math.sqrt(product);
    return geometricMean;
  }
  
  // Example usage:
  const a = 4; // You can change this value to any non-negative number
  const b = 9; // You can change this value to any non-negative number
  const geometricMean = calculateGeometricMean(a, b);
  
  console.log(`The geometric mean of ${a} and ${b} is ${geometricMean}.`);
  