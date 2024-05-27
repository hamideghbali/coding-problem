// Given the radiuses R1 and R2 of two concentric circles (R1 > R2), find the areas S1 and S2 of the circles and the area S3 of the ring bounded by the circles:
// S1 = π·(R1)^2
// , S2 = π·(R2)^2
// , S3 = S1 − S2.
// Use 3.14 for a value of π.

// Function to calculate the areas of the circles and the ring
function calculateConcentricCircleAreas(R1, R2) {
    // Calculate the areas of the circles
    const pi = 3.14;
    const S1 = pi * Math.pow(R1, 2);
    const S2 = pi * Math.pow(R2, 2);
    
    // Calculate the area of the ring
    const S3 = S1 - S2;
    
    // Return the areas as an object
    return { S1, S2, S3 };
  }
  
  // Example usage:
  const R1 = 6; // You can change this value to any radius
  const R2 = 4; // You can change this value to any radius
  const areas = calculateConcentricCircleAreas(R1, R2);
  
  console.log(`For two concentric circles with radii ${R1} and ${R2}:`);
  console.log(`The area of the outer circle (S1) is ${areas.S1}.`);
  console.log(`The area of the inner circle (S2) is ${areas.S2}.`);
  console.log(`The area of the ring (S3) bounded by the circles is ${areas.S3}.`);
  