// Given a number A, compute a power A^15 using five multiplying operators for computing A^2, A^3, A^5, A^10, A^15 sequentially. Output all obtained powers of

// the number A.

// Function to compute powers of a number A sequentially: A^2, A^3, A^5, A^10, and A^15
function computePowers(A) {
    // Calculate A^2
    const power2 = A * A;
  
    // Calculate A^3 (A * A^2)
    const power3 = A * power2;
  
    // Calculate A^5 (A^2 * A^3)
    const power5 = power2 * power3;
  
    // Calculate A^10 (A^5 * A^5)
    const power10 = power5 * power5;
  
    // Calculate A^15 (A^10 * A^5)
    const power15 = power10 * power5;
  
    // Return all obtained powers
    return { power2, power3, power5, power10, power15 };
  }
  
  // Example usage:
  const A = 2; // You can change this value to any number A
  const powers = computePowers(A);
  
  console.log(`For A = ${A}:`);
  console.log(`A^2 = ${powers.power2}`);
  console.log(`A^3 = ${powers.power3}`);
  console.log(`A^5 = ${powers.power5}`);
  console.log(`A^10 = ${powers.power10}`);
  console.log(`A^15 = ${powers.power15}`);
  