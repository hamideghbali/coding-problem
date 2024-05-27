// A distance L is given in centimeters. Find the amount of full meters of this
// distance (1 m = 1000 cm). Use the operator of integer division.

// Function to find the amount of full meters in a distance given in centimeters
function fullMeters(L) {
    // Use integer division to find the number of full meters
    const meters = Math.floor(L / 1000);
    
    // Return the result
    return meters;
  }
  
  // Example usage:
  const L = 2450; // Distance in centimeters
  const meters = fullMeters(L);
  
  console.log(`The amount of full meters in ${L} centimeters is ${meters} meters.`);
  