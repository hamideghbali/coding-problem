// Given the area S of a circle, find the diameter D and the length L of the
// circumference. Take into account that L = π·D, S = (π·D^2) /4. Use 3.14 for a value of π.

// Function to calculate the diameter and circumference length of a circle from its area
function calculateCirclePropertiesFromArea(area) {
    const pi = 3.14;
    
    // Calculate diameter using the formula D = sqrt(4S/pi)
    const diameter = Math.sqrt((4 * area) / pi);
    
    // Calculate circumference length using the formula L = pi * D
    const circumference = pi * diameter;
    
    // Return diameter and circumference length as an object
    return { diameter, circumference };
  }
  
  // Example usage:
  const area = 50; // You can change this value to any area
  const properties = calculateCirclePropertiesFromArea(area);
  
  console.log(`For a circle with area ${area}:`);
  console.log(`The diameter is ${properties.diameter}.`);
  console.log(`The circumference length is ${properties.circumference}.`);
  