// Given integer A, verify the following proposition: ―The number A is
// even‖.

// Function to verify if a number is even
function isEven(A) {
    // Check if A is divisible by 2 (i.e., has no remainder when divided by 2)
    if (A % 2 === 0) {
      return true; // A is even
    } else {
      return false; // A is not even
    }
  }
  
  // Example usage:
  const A = 6; // Example integer
  const result = isEven(A);
  
  if (result) {
    console.log(`${A} is even.`);
  } else {
    console.log(`${A} is not even.`);
  }
  