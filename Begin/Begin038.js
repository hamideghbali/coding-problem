// Solve a linear equation A·x + B = 0 with given coefficients A and B (A is
//     not equal to 0).

// Function to solve a linear equation A·x + B = 0
function solveLinearEquation(A, B) {
    // Check if A is not equal to 0
    if (A !== 0) {
      // Calculate the value of x
      const x = -B / A;
      
      // Return the value of x
      return x;
    } else {
      // If A is 0, the equation is not linear
      return "Equation is not linear.";
    }
  }
  
  // Example usage:
  const A = 2; // Coefficient A
  const B = 4; // Coefficient B
  const solution = solveLinearEquation(A, B);
  
  console.log(`The solution to the equation ${A}x + ${B} = 0 is x = ${solution}.`);
  