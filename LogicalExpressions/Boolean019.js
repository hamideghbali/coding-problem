// Verify the following proposition: ―Among three given integers there is
// at least one pair of opposite ones‖.

// Function to verify if there is at least one pair of opposite integers
function hasPairOfOppositeOnes(A, B, C) {
    // Check if any two of A, B, C have opposite signs
    if ((A > 0 && B < 0) || (A < 0 && B > 0) ||
        (A > 0 && C < 0) || (A < 0 && C > 0) ||
        (B > 0 && C < 0) || (B < 0 && C > 0)) {
      return true; // There is at least one pair of opposite integers
    } else {
      return false; // There are no pairs of opposite integers
    }
  }
  
  // Example usage:
  const A = -5; // Example integer A
  const B = 8; // Example integer B
  const C = -3; // Example integer C
  const result = hasPairOfOppositeOnes(A, B, C);
  
  if (result) {
    console.log(`Among the three given integers, there is at least one pair of opposite ones.`);
  } else {
    console.log(`Among the three given integers, there are no pairs of opposite ones.`);
  }
  