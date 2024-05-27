// Given two integers A and B, verify the following proposition: ―The
// numbers A and B have equal parity‖.

// Function to verify if the numbers A and B have equal parity
function haveEqualParity(A, B) {
    // Check if both A and B have equal parity
    if ((A % 2 === 0 && B % 2 === 0) || (A % 2 !== 0 && B % 2 !== 0)) {
      return true; // A and B have equal parity
    } else {
      return false; // A and B do not have equal parity
    }
  }
  
  // Example usage:
  const A = 4; // Example integer A
  const B = 7; // Example integer B
  const result = haveEqualParity(A, B);
  
  if (result) {
    console.log(`The numbers A and B have equal parity.`);
  } else {
    console.log(`The numbers A and B do not have equal parity.`);
  }
  