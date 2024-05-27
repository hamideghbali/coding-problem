// A three-digit integer is given. Output an integer obtained from the given
// one by reading it from right to left.

// Function to obtain an integer by reading a given three-digit integer from right to left
function reverseInteger(number) {
    // Extract the ones, tens, and hundreds digits
    const ones = number % 10;
    const tens = Math.floor((number % 100) / 10);
    const hundreds = Math.floor(number / 100);
    
    // Combine the digits in reverse order to form the new integer
    const newNumber = ones * 100 + tens * 10 + hundreds;
    
    // Return the new integer
    return newNumber;
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const reversedNumber = reverseInteger(number);
  
  console.log(`The integer obtained by reading ${number} from right to left is ${reversedNumber}.`);
  