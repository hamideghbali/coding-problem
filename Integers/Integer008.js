// A two-digit integer is given. Output an integer obtained from the given one
// by exchange of its digits.

// Function to obtain an integer by exchanging the digits of a given two-digit integer
function exchangeDigits(number) {
    // Extract the tens digit using integer division
    const tens = Math.floor(number / 10);
    
    // Extract the ones digit using the remainder operator
    const ones = number % 10;
    
    // Combine the digits in reverse order to form the new integer
    const newNumber = ones * 10 + tens;
    
    // Return the new integer
    return newNumber;
  }
  
  // Example usage:
  const number = 56; // Two-digit integer
  const exchangedNumber = exchangeDigits(number);
  
  console.log(`The integer obtained by exchanging the digits of ${number} is ${exchangedNumber}.`);
  