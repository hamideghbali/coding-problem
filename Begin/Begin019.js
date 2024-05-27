// The coordinates (x1, y1) and (x2, y2) of two opposite vertices of a rectangle are given. Sides of the rectangle are parallel to coordinate axes. Find the perimeter and the area of the rectangle.

// Function to calculate the perimeter and area of a rectangle
function calculateRectangleProperties(x1, y1, x2, y2) {
    // Calculate the length and width of the rectangle
    const length = Math.abs(x2 - x1);
    const width = Math.abs(y2 - y1);
    
    // Calculate the perimeter of the rectangle
    const perimeter = 2 * (length + width);
    
    // Calculate the area of the rectangle
    const area = length * width;
    
    // Return the perimeter and area
    return { perimeter, area };
  }
  
  // Example usage:
  const x1 = 1; // You can change this value to the x-coordinate of the first vertex
  const y1 = 3; // You can change this value to the y-coordinate of the first vertex
  const x2 = 5; // You can change this value to the x-coordinate of the second vertex
  const y2 = 7; // You can change this value to the y-coordinate of the second vertex
  const properties = calculateRectangleProperties(x1, y1, x2, y2);
  
  console.log(`For a rectangle with vertices (${x1}, ${y1}) and (${x2}, ${y2}):`);
  console.log(`The perimeter is ${properties.perimeter}.`);
  console.log(`The area is ${properties.area}.`);
  