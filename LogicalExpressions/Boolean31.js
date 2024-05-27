// Given three integers a, b, c that are the sides of a triangle, verify the
// following proposition: ―The triangle with sides a, b, c is isosceles‖.

// Function to verify if a triangle with sides a, b, c is isosceles
function isIsoscelesTriangle(a, b, c) {
    return a === b || b === c || a === c;
  }
  
  // Example usage:
  const a = 5; // Example value of side a
  const b = 5; // Example value of side b
  const c = 3; // Example value of side c
  
  const result = isIsoscelesTriangle(a, b, c);
  
  if (result) {
    console.log(`The triangle with sides ${a}, ${b}, ${c} is isosceles.`);
  } else {
    console.log(`The triangle with sides ${a}, ${b}, ${c} is not isosceles.`);
  }
  