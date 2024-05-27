// Variables A, B, C are given. Change values of the variables by moving the given value of A into the variable C, the given value of C into the variable B, and the given value of B into the variable A. Output the new values of A, B, C.

// Function to perform cyclic swapping of values between three variables A, B, and C
function cyclicSwapValues(A, B, C) {
    // Store the value of A in a temporary variable
    const temp = A;
  
    // Assign the value of C to A
    A = C;
  
    // Assign the value of B to C
    C = B;
  
    // Assign the value stored in the temporary variable to B
    B = temp;
  
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
  