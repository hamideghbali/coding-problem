// Given two integers A and B, verify the following proposition: ―Each of
// the numbers A and B is odd‖.

// Function to verify if both numbers A and B are odd
function areBothOdd(A, B) {
    // Check if both A and B are odd
    if (A % 2 !== 0 && B % 2 !== 0) {
      return true; // Both A and B are odd
    } else {
      return false; // At least one of A and B is not odd
    }
  }
  
  // Example usage:
  const A = 3; // Example integer A
  const B = 5; // Example integer B
  const result = areBothOdd(A, B);
  
  if (result) {
    console.log(`Both A and B are odd.`);
  } else {
    console.log(`At least one of A and B is not odd.`);
  }
  