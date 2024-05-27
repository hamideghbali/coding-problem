// Given three integers A, B, C, verify the following proposition: ―The
// double inequality A < B < C is fulfilled‖.

// Function to verify if the double inequality is fulfilled
function verifyDoubleInequality(A, B, C) {
    // Check if A < B < C
    if (A < B && B < C) {
      return true; // The double inequality is fulfilled
    } else {
      return false; // The double inequality is not fulfilled
    }
  }
  
  // Example usage:
  const A = 2; // Example integer A
  const B = 5; // Example integer B
  const C = 8; // Example integer C
  const result = verifyDoubleInequality(A, B, C);
  
  if (result) {
    console.log(`The double inequality A < B < C is fulfilled.`);
  } else {
    console.log(`The double inequality A < B < C is not fulfilled.`);
  }
  