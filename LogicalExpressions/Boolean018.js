// Verify the following proposition: ―Among three given integers there is
// at least one pair of equal ones‖.

// Function to verify if there is at least one pair of equal integers
function hasPairOfEqualOnes(A, B, C) {
    // Check if any two of A, B, C are equal
    if (A === B || A === C || B === C) {
      return true; // There is at least one pair of equal integers
    } else {
      return false; // There are no pairs of equal integers
    }
  }
  
  // Example usage:
  const A = 5; // Example integer A
  const B = 8; // Example integer B
  const C = 5; // Example integer C
  const result = hasPairOfEqualOnes(A, B, C);
  
  if (result) {
    console.log(`Among the three given integers, there is at least one pair of equal ones.`);
  } else {
    console.log(`Among the three given integers, there are no pairs of equal ones.`);
  }
  