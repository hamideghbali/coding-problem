// A weight M is given in kilograms. Find the amount of full tons of this
// weight (1 ton = 1000 kg). Use the operator of integer division.

// Function to find the amount of full tons in a weight given in kilograms
function fullTons(M) {
    // Use integer division to find the number of full tons
    const tons = Math.floor(M / 1000);
    
    // Return the result
    return tons;
  }
  
  // Example usage:
  const M = 5678; // Weight in kilograms
  const tons = fullTons(M);
  
  console.log(`The amount of full tons in ${M} kilograms is ${tons} tons.`);
  