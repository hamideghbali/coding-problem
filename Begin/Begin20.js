// The coordinates (x1, y1) and (x2, y2) of two points are given. Find the distance between the points:
// ((x2 − x1)^2 + (y2 − y1)^2)^1/2

// Function to calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
    // Calculate the square of the differences in x and y coordinates
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distanceSquared = Math.pow(dx, 2) + Math.pow(dy, 2);
  
    // Calculate the square root of the distance squared to get the actual distance
    const distance = Math.sqrt(distanceSquared);
    
    // Return the distance
    return distance;
  }
  
  // Example usage:
  const x1 = 1; // You can change this value to the x-coordinate of the first point
  const y1 = 3; // You can change this value to the y-coordinate of the first point
  const x2 = 5; // You can change this value to the x-coordinate of the second point
  const y2 = 7; // You can change this value to the y-coordinate of the second point
  const distance = calculateDistance(x1, y1, x2, y2);
  
  console.log(`The distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance}.`);
  