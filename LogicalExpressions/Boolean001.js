// Given integer A, verify the following proposition: ―The number A is
// positive‖.

// Function to verify if a number is positive
function isPositive(A) {
    // Check if A is greater than zero
    if (A > 0) {
      return true; // A is positive
    } else {
      return false; // A is not positive
    }
  }
  
  // Example usage:
  const A = 5; // Example integer
  const result = isPositive(A);
  
  if (result) {
    console.log(`${A} is positive.`);
  } else {
    console.log(`${A} is not positive.`);
  }
  