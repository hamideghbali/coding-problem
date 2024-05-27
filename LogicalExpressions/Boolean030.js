// Given three integers a, b, c that are the sides of a triangle, verify the
// following proposition: ―The triangle with sides a, b, c is equilateral‖.

// Function to verify if a triangle with sides a, b, c is equilateral
function isEquilateralTriangle(a, b, c) {
    return a === b && b === c;
  }
  
  // Example usage:
  const a = 5; // Example value of side a
  const b = 5; // Example value of side b
  const c = 5; // Example value of side c
  
  const result = isEquilateralTriangle(a, b, c);
  
  if (result) {
    console.log(`The triangle with sides ${a}, ${b}, ${c} is equilateral.`);
  } else {
    console.log(`The triangle with sides ${a}, ${b}, ${c} is not equilateral.`);
  }
  