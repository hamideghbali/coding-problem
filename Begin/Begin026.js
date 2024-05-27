// Given an independent variable x, find the value of a function
// y = 4(x−3)^6− 7(x−3)^3 + 2.

// Function to calculate the value of the given function y = 4(x-3)^6 - 7(x-3)^3 + 2
function calculateFunctionValue(x) {
    const base = x - 3;
    
    // Calculate the value of the function using the provided formula
    const y = 4 * Math.pow(base, 6) - 7 * Math.pow(base, 3) + 2;
    
    // Return the value of the function
    return y;
  }
  
  // Example usage:
  const x = 5; // You can change this value to any value of x
  const y = calculateFunctionValue(x);
  
  console.log(`For x = ${x}, y = ${y}.`);
  