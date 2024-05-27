
// Solve a system of linear equations
// A1·x + B1·y = C1,
// A2·x + B2·y = C2

// with given coefficients A1, B1, C1, A2, B2, C2 provided that the system has the
// only solution. Use the following formulas:
// x = (C1·B2 − C2·B1)/D, 
// y = (A1·C2 − A2·C1)/D,
// where D = A1·B2 − A2·B1.

// Function to solve a system of linear equations
function solveLinearSystem(A1, B1, C1, A2, B2, C2) {
    // Calculate the determinant
    const D = A1 * B2 - A2 * B1;
    
    // Check if the determinant is non-zero (system has a unique solution)
    if (D !== 0) {
      // Calculate the values of x and y
      const x = (C1 * B2 - C2 * B1) / D;
      const y = (A1 * C2 - A2 * C1) / D;
      
      // Return the solution
      return { x, y };
    } else {
      // If the determinant is zero, the system may not have a unique solution
      return "System does not have a unique solution.";
    }
  }
  
  // Example usage:
  const A1 = 2; // Coefficient A1
  const B1 = 3; // Coefficient B1
  const C1 = 7; // Coefficient C1
  const A2 = 4; // Coefficient A2
  const B2 = 1; // Coefficient B2
  const C2 = 10; // Coefficient C2
  const solution = solveLinearSystem(A1, B1, C1, A2, B2, C2);
  
  console.log(`The solution to the system of linear equations is:`);
  console.log(`x = ${solution.x}`);
  console.log(`y = ${solution.y}`);
  