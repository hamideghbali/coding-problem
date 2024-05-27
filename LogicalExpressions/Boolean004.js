// Given two integers A and B, verify the following proposition: ―The
// inequalities A > 2 and B ≤ 3 both are fulfilled‖.

// Function to verify if both inequalities are fulfilled
function verifyInequalities(A, B) {
    // Check if both inequalities are true
    if (A > 2 && B <= 3) {
      return true; // Both inequalities are fulfilled
    } else {
      return false; // At least one inequality is not fulfilled
    }
  }
  
  // Example usage:
  const A = 5; // Example integer A
  const B = 3; // Example integer B
  const result = verifyInequalities(A, B);
  
  if (result) {
    console.log(`The inequalities A > 2 and B ≤ 3 are both fulfilled.`);
  } else {
    console.log(`At least one of the inequalities A > 2 and B ≤ 3 is not fulfilled.`);
  }
  