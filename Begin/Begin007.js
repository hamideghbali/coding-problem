// Given the radius R of a circle, find the length L of the circumference and the
// area S of the circle:

// L = 2*π*R, S = π*R^2
// .

// Use 3.14 for a value of π.

// Function to calculate the circumference and area of a circle
function calculateCircleProperties(radius) {
    const pi = 3.14;
    
    // Calculate the circumference
    const circumference = 2 * pi * radius;
    
    // Calculate the area
    const area = pi * Math.pow(radius, 2); // or pi * (radius ** 2)
    
    // Return the circumference and area as an object
    return { circumference, area };
  }
  
  // Example usage:
  const radius = 5; // You can change this value to any radius
  const properties = calculateCircleProperties(radius);
  
  console.log(`The circumference of a circle with radius ${radius} is ${properties.circumference}.`);
  console.log(`The area of a circle with radius ${radius} is ${properties.area}.`);
  