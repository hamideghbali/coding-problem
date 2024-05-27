// The angle value α in degrees (0 ≤ α < 360) is given. Convert this value into
// radians. Take into account that 180° = π radians. Use 3.14 for a value of π.


// Function to convert an angle from degrees to radians
function degreesToRadians(alpha) {
    // Convert degrees to radians using the conversion factor (pi / 180)
    const radians = alpha * (Math.PI / 180);
    
    // Return the value in radians
    return radians;
  }
  
  // Example usage:
  const alphaDegrees = 45; // You can change this value to any angle in degrees
  const alphaRadians = degreesToRadians(alphaDegrees);
  
  console.log(`For α = ${alphaDegrees}°, the value in radians is ${alphaRadians}.`);
  