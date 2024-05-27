// Given the length L of a circumference, find the radius R and the area S of
// the circle. Take into account that L = 2·π·R, S = π·R^2
// . Use 3.14 for a value of π.

// Function to calculate the radius and area of a circle
function calculateCirclePropertiesFromCircumference(circumference) {
    // Given the formula L = 2πR, solve for R
    const pi = 3.14;
    const radius = circumference / (2 * pi);
  
    // Calculate the area using the formula S = πR^2
    const area = pi * Math.pow(radius, 2);
  
    // Return the radius and area as an object
    return { radius, area };
  }
  
  // Example usage:
  const circumference = 10; // You can change this value to any circumference length
  const properties = calculateCirclePropertiesFromCircumference(circumference);
  
  console.log(`For a circle with circumference ${circumference}:`);
  console.log(`The radius is ${properties.radius}.`);
  console.log(`The area is ${properties.area}.`);
  