// Solve a quadratic equation A·x^2 + B·x + C = 0 with given coefficients A, B,
// C (A and the discriminant of the equation are positive). Output the smaller
// equation root and then the larger one. Roots of the quadratic equation may be
// found by formula
// x1, 2 = (−B ± (D)^1/2)/(2·A),
// where D = B^2 − 4·A·C is a discriminant.

// Function to solve a quadratic equation A·x^2 + B·x + C = 0
function solveQuadraticEquation(A, B, C) {
    // Calculate the discriminant
    const D = B * B - 4 * A * C;
    
    // Check if the discriminant is positive
    if (D >= 0) {
      // Calculate the roots
      const x1 = (-B + Math.sqrt(D)) / (2 * A);
      const x2 = (-B - Math.sqrt(D)) / (2 * A);
      
      // Return the roots
      return [Math.min(x1, x2), Math.max(x1, x2)];
    } else {
      // If the discriminant is negative, roots are complex
      return "Roots are complex.";
    }
  }
  
  // Example usage:
  const A = 1; // Coefficient A
  const B = -3; // Coefficient B
  const C = 2; // Coefficient C
  const roots = solveQuadraticEquation(A, B, C);
  
  console.log(`The smaller root is x1 = ${roots[0]}`);
  console.log(`The larger root is x2 = ${roots[1]}`);
  