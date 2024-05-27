// A three-digit integer is given. Find the sum and the product of its digits.

// Function to find the sum and product of the digits of a three-digit integer
function sumAndProductOfDigits(number) {
    // Extract the hundreds, tens, and ones digits
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;
    
    // Calculate the sum of the digits
    const sum = hundreds + tens + ones;
    
    // Calculate the product of the digits
    const product = hundreds * tens * ones;
    
    // Return the sum and product
    return { sum, product };
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const { sum, product } = sumAndProductOfDigits(number);
  
  console.log(`The sum of the digits of ${number} is ${sum}.`);
  console.log(`The product of the digits of ${number} is ${product}.`);
  