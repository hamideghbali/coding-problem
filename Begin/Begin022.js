// Exchange the values of two given variables A and B. Output the new
// values of A and B.

// Function to exchange the values of two variables A and B
function exchangeValues(A, B) {
    // Store the value of A in a temporary variable
    const temp = A;
  
    // Assign the value of B to A
    A = B;
  
    // Assign the value stored in the temporary variable to B
    B = temp;
  
    // Return the new values of A and B
    return { A, B };
  }
  
  // Example usage:
  let A = 5; // You can change this value to any value of A
  let B = 10; // You can change this value to any value of B
  const exchangedValues = exchangeValues(A, B);
  
  console.log(`New value of A: ${exchangedValues.A}`);
  console.log(`New value of B: ${exchangedValues.B}`);
  