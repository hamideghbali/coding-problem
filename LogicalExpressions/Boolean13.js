// Given three integers A, B, C, verify the following proposition: ―At least
// one of the numbers A, B, C is positive‖.

// Function to verify if at least one of the numbers A, B, C is positive
function isAtLeastOnePositive(A, B, C) {
    // Check if at least one of A, B, C is positive
    if (A > 0 || B > 0 || C > 0) {
      return true; // At least one of A, B, C is positive
    } else {
      return false; // None of A, B, C is positive
    }
  }
  
  // Example usage:
  const A = -3; // Example integer A
  const B = 0; // Example integer B
  const C = 5; // Example integer C
  const result = isAtLeastOnePositive(A, B, C);
  
  if (result) {
    console.log(`At least one of the numbers A, B, C is positive.`);
  } else {
    console.log(`None of the numbers A, B, C is positive.`);
  }
  