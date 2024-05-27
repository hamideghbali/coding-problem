// A two-digit integer is given. Find the sum and the product of its digits.

// Function to find the sum and product of the digits of a two-digit integer
function sumAndProductOfDigits(number) {
    // Extract the tens digit using integer division
    const tens = Math.floor(number / 10);
    
    // Extract the ones digit using the remainder operator
    const ones = number % 10;
    
    // Calculate the sum of the digits
    const sum = tens + ones;
    
    // Calculate the product of the digits
    const product = tens * ones;
    
    // Return the sum and product
    return { sum, product };
  }
  
  // Example usage:
  const number = 56; // Two-digit integer
  const { sum, product } = sumAndProductOfDigits(number);
  
  console.log(`The sum of the digits of ${number} is ${sum}`);
  console.log(`The product of the digits of ${number} is ${product}`);
  