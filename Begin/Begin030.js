// The angle value α in radians (0 ≤ α < 2·π) is given. Convert this value into
// degrees. Take into account that 180° = π radians. Use 3.14 for a value of π.

// Function to convert an angle from radians to degrees
function radiansToDegrees(alpha) {
    // Convert radians to degrees using the conversion factor (180 / pi)
    const degrees = alpha * (180 / Math.PI);
    
    // Return the value in degrees
    return degrees;
  }
  
  // Example usage:
  const alphaRadians = Math.PI / 4; // You can change this value to any angle in radians
  const alphaDegrees = radiansToDegrees(alphaRadians);
  
  console.log(`For α = ${alphaRadians} radians, the value in degrees is ${alphaDegrees}°.`);
  