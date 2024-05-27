// Given three integers a, b, c, verify the following proposition: ―A triangle
// with the sides a, b, c exists‖.

// Function to verify if a triangle with sides a, b, c exists
function isTriangleExists(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
  }
  
  // Example usage:
  const a = 3; // Example value of side a
  const b = 4; // Example value of side b
  const c = 5; // Example value of side c
  
  const result = isTriangleExists(a, b, c);
  
  if (result) {
    console.log(`A triangle with sides ${a}, ${b}, ${c} exists.`);
  } else {
    console.log(`A triangle with sides ${a}, ${b}, ${c} does not exist.`);
  }
  