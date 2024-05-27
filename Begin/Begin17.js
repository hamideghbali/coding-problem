// Three points A, B, C are given on the real axis. Find the length of AC, the length of BC, and the sum of these lengths.

// Function to calculate the lengths of line segments AC, BC, and their sum
function calculateLengthsAndSum(A, B, C) {
    // Calculate the lengths of line segments AC and BC
    const lengthAC = Math.abs(C - A);
    const lengthBC = Math.abs(C - B);
    
    // Calculate the sum of the lengths
    const sumLengths = lengthAC + lengthBC;
    
    // Return the lengths and their sum
    return { lengthAC, lengthBC, sumLengths };
  }
  
  // Example usage:
  const A = 3; // You can change this value to any x-coordinate
  const B = 8; // You can change this value to any x-coordinate
  const C = 10; // You can change this value to any x-coordinate
  const lengthsAndSum = calculateLengthsAndSum(A, B, C);
  
  console.log(`Length of AC: ${lengthsAndSum.lengthAC}`);
  console.log(`Length of BC: ${lengthsAndSum.lengthBC}`);
  console.log(`Sum of lengths of AC and BC: ${lengthsAndSum.sumLengths}`);
  