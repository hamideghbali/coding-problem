// Given three integers a, b, c that are the sides of a triangle, verify the
// following proposition: ―The triangle with sides a, b, c is a right triangle‖.

// Function to verify if a triangle with sides a, b, c is a right triangle
function isRightTriangle(a, b, c) {
    // Sort sides in ascending order
    const sides = [a, b, c].sort((x, y) => x - y);
  
    // Apply Pythagorean theorem
    return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
  }
  
  // Example usage:
  const a = 3; // Example value of side a
  const b = 4; // Example value of side b
  const c = 5; // Example value of side c
  
  const result = isRightTriangle(a, b, c);
  
  if (result) {
    console.log(`The triangle with sides ${a}, ${b}, ${c} is a right triangle.`);
  } else {
    console.log(`The triangle with sides ${a}, ${b}, ${c} is not a right triangle.`);
  }
  