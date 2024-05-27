// Variables A, B, C are given. Change values of the variables by moving the
// given value of A into the variable B, the given value of B into the variable C,
// and the given value of C into the variable A. Output the new values of A, B, C.

// Function to perform cyclic swapping of values between three variables A, B, and C
function cyclicSwapValues(A, B, C) {
    // Store the values of A, B, and C in temporary variables
    const tempA = A;
    const tempB = B;
    const tempC = C;
  
    // Assign the value of C to A
    A = tempC;
  
    // Assign the value of A to B
    B = tempA;
  
    // Assign the value of B to C
    C = tempB;
  
    // Return the new values of A, B, and C
    return { A, B, C };
  }
  
  // Example usage:
  let A = 5; // You can change this value to any value of A
  let B = 10; // You can change this value to any value of B
  let C = 15; // You can change this value to any value of C
  const swappedValues = cyclicSwapValues(A, B, C);
  
  console.log(`New value of A: ${swappedValues.A}`);
  console.log(`New value of B: ${swappedValues.B}`);
  console.log(`New value of C: ${swappedValues.C}`);
  