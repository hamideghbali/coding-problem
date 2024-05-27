// Given three integers A, B, C, verify the following proposition: ―Each of
// the numbers A, B, C is positive‖.


// Function to verify if each of the numbers A, B, C is positive
function areAllPositive(A, B, C) {
    // Check if each of A, B, C is positive
    if (A > 0 && B > 0 && C > 0) {
      return true; // Each of A, B, C is positive
    } else {
      return false; // At least one of A, B, C is not positive
    }
  }
  
  // Example usage:
  const A = 3; // Example integer A
  const B = -2; // Example integer B
  const C = 5; // Example integer C
  const result = areAllPositive(A, B, C);
  
  if (result) {
    console.log(`Each of the numbers A, B, C is positive.`);
  } else {
    console.log(`At least one of the numbers A, B, C is not positive.`);
  }
  