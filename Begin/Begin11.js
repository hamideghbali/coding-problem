// Two nonzero numbers are given. Find the sum, the difference, the product,
// and the quotient of their absolute values.

// Function to calculate the sum, difference, product, and quotient of absolute values of two non-zero numbers
function calculateOperationsOfAbsoluteValues(a, b) {
    // Calculate the absolute values of the numbers
    const absA = Math.abs(a);
    const absB = Math.abs(b);
  
    // Calculate the sum, difference, product, and quotient
    const sum = absA + absB;
    const difference = absA - absB;
    const product = absA * absB;
    const quotient = absA / absB;
  
    // Return the results as an object
    return { sum, difference, product, quotient };
  }
  
  // Example usage:
  const a = -4; // You can change this value to any non-zero number
  const b = 3; // You can change this value to any non-zero number
  const operations = calculateOperationsOfAbsoluteValues(a, b);
  
  console.log(`The sum of absolute values of ${a} and ${b} is ${operations.sum}.`);
  console.log(`The difference of absolute values of ${a} and ${b} is ${operations.difference}.`);
  console.log(`The product of absolute values of ${a} and ${b} is ${operations.product}.`);
  console.log(`The quotient of absolute values of ${a} and ${b} is ${operations.quotient}.`);
  