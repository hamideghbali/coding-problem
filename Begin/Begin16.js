// Two points with the coordinates x1 and x2 are given on the real axis. Find the distance between these points: |x2 − x1|.

// Function to calculate the distance between two points on the real axis
function calculateDistance(x1, x2) {
    // Calculate the absolute difference between x2 and x1
    const distance = Math.abs(x2 - x1);
    
    // Return the distance
    return distance;
  }
  
  // Example usage:
  const x1 = 3; // You can change this value to any x-coordinate
  const x2 = 8; // You can change this value to any x-coordinate
  const distance = calculateDistance(x1, x2);
  
  console.log(`The distance between points ${x1} and ${x2} on the real axis is ${distance}.`);
  