// Given three integers A, B, C, verify the following proposition: ―Exactly
// one of the numbers A, B, C is positive‖.

// Function to verify if exactly one of the numbers A, B, C is positive
function isExactlyOnePositive(A, B, C) {
    // Check if exactly one of A, B, C is positive
    if ((A > 0 && B <= 0 && C <= 0) || 
        (A <= 0 && B > 0 && C <= 0) || 
        (A <= 0 && B <= 0 && C > 0)) {
      return true; // Exactly one of A, B, C is positive
    } else {
      return false; // None or more than one of A, B, C is positive
    }
  }
  
  // Example usage:
  const A = -3; // Example integer A
  const B = 2; // Example integer B
  const C = -5; // Example integer C
  const result = isExactlyOnePositive(A, B, C);
  
  if (result) {
    console.log(`Exactly one of the numbers A, B, C is positive.`);
  } else {
    console.log(`None or more than one of the numbers A, B, C is positive.`);
  }
  