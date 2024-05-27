// Given two integers A and B, verify the following proposition: ―The
// inequality A ≥ 0 is fulfilled or the inequality B < −2 is fulfilled‖.

// Function to verify if the proposition is fulfilled
function verifyProposition(A, B) {
    // Check if either A ≥ 0 or B < -2 is true
    if (A >= 0 || B < -2) {
      return true; // The proposition is fulfilled
    } else {
      return false; // Neither A ≥ 0 nor B < -2 is true
    }
  }
  
  // Example usage:
  const A = 5; // Example integer A
  const B = -3; // Example integer B
  const result = verifyProposition(A, B);
  
  if (result) {
    console.log(`The proposition is fulfilled.`);
  } else {
    console.log(`The proposition is not fulfilled.`);
  }
  