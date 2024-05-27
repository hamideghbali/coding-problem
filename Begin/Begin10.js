// Two nonzero numbers are given. Find the sum, the difference, the product,
// and the quotient of their squares.

// Function to calculate the sum, difference, product, and quotient of squares of two non-zero numbers
function calculateOperationsOfSquares(a, b) {
    // Calculate the squares of the numbers
    const squareA = a * a;
    const squareB = b * b;
  
    // Calculate the sum, difference, product, and quotient
    const sum = squareA + squareB;
    const difference = squareA - squareB;
    const product = squareA * squareB;
    const quotient = squareA / squareB;
  
    // Return the results as an object
    return { sum, difference, product, quotient };
  }
  
  // Example usage:
  const a = 4; // You can change this value to any non-zero number
  const b = 3; // You can change this value to any non-zero number
  const operations = calculateOperationsOfSquares(a, b);
  
  console.log(`The sum of squares of ${a} and ${b} is ${operations.sum}.`);
  console.log(`The difference of squares of ${a} and ${b} is ${operations.difference}.`);
  console.log(`The product of squares of ${a} and ${b} is ${operations.product}.`);
  console.log(`The quotient of squares of ${a} and ${b} is ${operations.quotient}.`);
  