// Given two integers A and B, verify the following proposition: ―At least
// one of the numbers A and B is odd‖.

// Function to verify if at least one of the numbers A and B is odd
function isAtLeastOneOdd(A, B) {
    // Check if at least one of A and B is odd
    if (A % 2 !== 0 || B % 2 !== 0) {
      return true; // At least one of A and B is odd
    } else {
      return false; // Neither A nor B is odd
    }
  }
  
  // Example usage:
  const A = 3; // Example integer A
  const B = 4; // Example integer B
  const result = isAtLeastOneOdd(A, B);
  
  if (result) {
    console.log(`At least one of A and B is odd.`);
  } else {
    console.log(`Neither A nor B is odd.`);
  }
  