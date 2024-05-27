// Two positive integers A and B are given (A > B). Segment of length A
// contains the greatest possible amount of inside segments of length B (without
// overlaps). Find the length of unused part of the segment A. Use the operator of
// // taking the remainder after integer division.

// Function to find the length of unused part of segment A
function unusedLength(A, B) {
    // Use the remainder operator to find the length of unused part
    const unused = A % B;
    
    // Return the result
    return unused;
  }
  
  // Example usage:
  const A = 20; // Length of segment A
  const B = 3; // Length of segment B
  const unusedPart = unusedLength(A, B);
  
  console.log(`The length of unused part of segment A is ${unusedPart}.`);
  