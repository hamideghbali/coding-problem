// Given the diameter d of a circle, find the length L of the circle: L = π*d. Use
// 3.14 for a value of π.

// Function to calculate the circumference of a circle
function calculateCircumference(diameter) {
    const pi = 3.14;
    const circumference = pi * diameter;
    return circumference;
  }
  
  // Example usage:
  const diameter = 10; // You can change this value to any diameter
  const circumference = calculateCircumference(diameter);
  
  console.log(`The circumference of a circle with diameter ${diameter} is ${circumference}.`);
  