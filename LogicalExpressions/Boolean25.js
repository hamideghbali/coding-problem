// Given two real numbers x, y, verify the following proposition: ―The
// point with coordinates (x, y) is in the second coordinate quarter‖.

// Function to verify if a point with coordinates (x, y) is in the second coordinate quarter
function isInSecondQuarter(x, y) {
    return x < 0 && y > 0;
  }
  
  // Example usage:
  const x = -2; // Example value of x
  const y = 3; // Example value of y
  
  const result = isInSecondQuarter(x, y);
  
  if (result) {
    console.log(`The point (${x}, ${y}) is in the second coordinate quarter.`);
  } else {
    console.log(`The point (${x}, ${y}) is not in the second coordinate quarter.`);
  }
  