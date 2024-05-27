// Two positive integers A and B are given (A > B). Segment of length A
// contains the greatest possible amount of inside segments of length B (without
// overlaps). Find the amount of segments B placed on the segment A. Use the
// operator of integer division.

// Function to find the amount of segments B placed on segment A
function segmentsOnSegment(A, B) {
    // Use integer division to find the amount of segments B placed on segment A
    const segments = Math.floor(A / B);
    
    // Return the result
    return segments;
  }
  
  // Example usage:
  const A = 20; // Length of segment A
  const B = 3; // Length of segment B
  const amountOfSegments = segmentsOnSegment(A, B);
  
  console.log(`The amount of segments of length ${B} placed on segment of length ${A} is ${amountOfSegments}.`);
  