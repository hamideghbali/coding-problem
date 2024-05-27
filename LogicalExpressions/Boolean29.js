// Given real numbers x, y, x1, y1, x2, y2, verify the following proposition:
// ―The point (x, y) is inside of the rectangle whose left top vertex is (x1, y1), right
// bottom vertex is (x2, y2), and sides are parallel to coordinate axes‖.

// Function to verify if a point (x, y) is inside a rectangle
function isInsideRectangle(x, y, x1, y1, x2, y2) {
    return x > x1 && x < x2 && y > y1 && y < y2;
  }
  
  // Example usage:
  const x = 2; // Example value of x
  const y = 3; // Example value of y
  const x1 = 1; // Example value of x1
  const y1 = 1; // Example value of y1
  const x2 = 4; // Example value of x2
  const y2 = 5; // Example value of y2
  
  const result = isInsideRectangle(x, y, x1, y1, x2, y2);
  
  if (result) {
    console.log(`The point (${x}, ${y}) is inside the rectangle.`);
  } else {
    console.log(`The point (${x}, ${y}) is not inside the rectangle.`);
  }
  