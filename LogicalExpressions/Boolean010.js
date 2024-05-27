// Given two integers A and B, verify the following proposition: ―Exactly
// one of the numbers A and B is odd‖.

// Function to verify if exactly one of the numbers A and B is odd
function isExactlyOneOdd(A, B) {
    // Check if exactly one of A and B is odd
    if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0)) {
      return true; // Exactly one of A and B is odd
    } else {
      return false; // Neither or both of A and B are odd
    }
  }
  
  // Example usage:
  const A = 3; // Example integer A
  const B = 4; // Example integer B
  const result = isExactlyOneOdd(A, B);
  
  if (result) {
    console.log(`Exactly one of A and B is odd.`);
  } else {
    console.log(`Neither or both of A and B are odd.`);
  }
  