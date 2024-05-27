// Given two real numbers x, y, verify the following proposition: ―The
// point with coordinates (x, y) is in the first or third coordinate quarter‖.

// Function to verify if a point with coordinates (x, y) is in the first or third coordinate quarter
function isInFirstOrThirdQuarter(x, y) {
    return (x > 0 && y > 0) || (x < 0 && y < 0);
  }
  
  // Example usage:
  const x = 2; // Example value of x
  const y = -3; // Example value of y
  
  const result = isInFirstOrThirdQuarter(x, y);
  
  if (result) {
    console.log(`The point (${x}, ${y}) is in the first or third coordinate quarter.`);
  } else {
    console.log(`The point (${x}, ${y}) is not in the first or third coordinate quarter.`);
  }
  