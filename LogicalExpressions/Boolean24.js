// Three real numbers A, B, C are given (A is not equal to 0). By means of a discriminant D = B^2 − 4·A·C, verify the following proposition: ―The quadratic equation A·x^2 + B·x + C = 0 has real roots‖.

// Function to verify if the quadratic equation Ax^2 + Bx + C = 0 has real roots
function hasRealRoots(A, B, C) {
    // Calculate the discriminant
    const discriminant = B * B - 4 * A * C;
    
    // Check if the discriminant is non-negative
    return discriminant >= 0;
  }
  
  // Example usage:
  const A = 2; // Example value of A
  const B = 5; // Example value of B
  const C = 2; // Example value of C
  
  const result = hasRealRoots(A, B, C);
  
  if (result) {
    console.log(`The quadratic equation ${A}x^2 + ${B}x + ${C} = 0 has real roots.`);
  } else {
    console.log(`The quadratic equation ${A}x^2 + ${B}x + ${C} = 0 does not have real roots.`);
  }
  