// The legs a and b of a right triangle are given. Find the hypotenuse c and the perimeter P of the triangle:
// c = (a ^2 + b ^2)^1/2 ,
//  P = a + b + c

// Function to calculate the hypotenuse and perimeter of a right triangle
function calculateTriangleProperties(a, b) {
    // Calculate the hypotenuse
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    // Calculate the perimeter
    const perimeter = a + b + c;
    
    // Return the hypotenuse and perimeter as an object
    return { c, perimeter };
  }
  
  // Example usage:
  const legA = 3; // You can change this value to any length
  const legB = 4; // You can change this value to any length
  const properties = calculateTriangleProperties(legA, legB);
  
  console.log(`For a right triangle with legs ${legA} and ${legB}:`);
  console.log(`The hypotenuse is ${properties.c}.`);
  console.log(`The perimeter is ${properties.perimeter}.`);
  