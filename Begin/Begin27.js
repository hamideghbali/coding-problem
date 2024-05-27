// Given a number A, compute a power A^8 using three multiplying operators for computing A^2 , A^4 , A^8 sequentially. Output all obtained powers of the number A.
// Function to compute powers of a number A sequentially: A^2, A^4, and A^8
function computePowers(A) {
    // Calculate A^2
    const power2 = A * A;
  
    // Calculate A^4 (A^2 * A^2)
    const power4 = power2 * power2;
  
    // Calculate A^8 (A^4 * A^4)
    const power8 = power4 * power4;
  
    // Return all obtained powers
    return { power2, power4, power8 };
  }
  
  // Example usage:
  const A = 2; // You can change this value to any number A
  const powers = computePowers(A);
  
  console.log(`For A = ${A}:`);
  console.log(`A^2 = ${powers.power2}`);
  console.log(`A^4 = ${powers.power4}`);
  console.log(`A^8 = ${powers.power8}`);
  