// Given three integers A, B, C, verify the following proposition: ―Exactly
// two of the numbers A, B, C are positive‖.

// Function to verify if exactly two of the numbers A, B, C are positive
function areExactlyTwoPositive(A, B, C) {
    // Count the number of positive integers
    let count = 0;
    if (A > 0) count++;
    if (B > 0) count++;
    if (C > 0) count++;
    
    // Check if exactly two of A, B, C are positive
    return count === 2;
  }
  
  // Example usage:
  const A = -3; // Example integer A
  const B = 2; // Example integer B
  const C = 5; // Example integer C
  const result = areExactlyTwoPositive(A, B, C);
  
  if (result) {
    console.log(`Exactly two of the numbers A, B, C are positive.`);
  } else {
    console.log(`The proposition is not fulfilled.`);
  }
  