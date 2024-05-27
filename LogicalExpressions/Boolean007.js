// Given three integers A, B, C, verify the following proposition: ―The
// number B is between A and C‖.

// Function to verify if the number B is between A and C
function isBetween(A, B, C) {
    // Check if B is between A and C
    if ((A < B && B < C) || (C < B && B < A)) {
      return true; // B is between A and C
    } else {
      return false; // B is not between A and C
    }
  }
  
  // Example usage:
  const A = 3; // Example integer A
  const B = 5; // Example integer B
  const C = 7; // Example integer C
  const result = isBetween(A, B, C);
  
  if (result) {
    console.log(`The number B is between A and C.`);
  } else {
    console.log(`The number B is not between A and C.`);
  }
  