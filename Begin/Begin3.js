// The sides a and b of a rectangle are given. Find the area S = a*b and the
// perimeter P = 2*(a + b) of the rectangle.

// Function to calculate the area and perimeter of a rectangle
function calculateRectangleProperties(sideA, sideB) {
    // Calculate the area
    const area = sideA * sideB;
    
    // Calculate the perimeter
    const perimeter = 2 * (sideA + sideB);
    
    // Return the area and perimeter as an object
    return { area, perimeter };
  }
  
  // Example usage:
  const sideA = 5; // You can change this value to any side length
  const sideB = 10; // You can change this value to any side length
  const properties = calculateRectangleProperties(sideA, sideB);
  
  console.log(`The area of a rectangle with sides ${sideA} and ${sideB} is ${properties.area}.`);
  console.log(`The perimeter of a rectangle with sides ${sideA} and ${sideB} is ${properties.perimeter}.`);
  