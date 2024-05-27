// Given an independent variable x, find the value of a function:
// y = 3x^6 − 6x^2 − 7

// Function to calculate the value of the given function y = 3x^6 - 6x^2 - 7
function calculateFunctionValue(x) {
    // Calculate the value of the function using the provided formula
    const y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
    
    // Return the value of the function
    return y;
  }
  
  // Example usage:
  const x = 2; // You can change this value to any value of x
  const y = calculateFunctionValue(x);
  
  console.log(`For x = ${x}, y = ${y}.`);
  