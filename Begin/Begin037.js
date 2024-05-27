// The velocity of the first car is V1 km/h, the velocity of the second car is
// V2 km/h, the initial distance between the cars is S km. Find the distance
// between the cars after T hours provided that at the start time the distance is
// decreasing. This distance is equal to an absolute value of a difference between
// the initial distance and the total distance covered by the both cars.

// Function to calculate the distance between two cars after T hours
// when the initial distance is decreasing
function calculateDistanceBetweenCars(V1, V2, S, T) {
    // Calculate the distance covered by the first car
    const S1 = V1 * T;
    
    // Calculate the distance covered by the second car
    const S2 = V2 * T;
    
    // Calculate the total distance covered by both cars
    const totalDistance = S1 + S2;
    
    // Calculate the distance between the cars after T hours
    const distance = Math.abs(S - totalDistance);
    
    // Return the distance between the cars
    return distance;
  }
  
  // Example usage:
  const V1 = 60; // Velocity of the first car (km/h)
  const V2 = 80; // Velocity of the second car (km/h)
  const S = 200; // Initial distance between the cars (km)
  const T = 2; // Time elapsed (hours)
  const distance = calculateDistanceBetweenCars(V1, V2, S, T);
  
  console.log(`The distance between the cars after ${T} hours is ${distance} km.`);
  