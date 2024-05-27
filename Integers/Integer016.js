// A three-digit integer is given. Output an integer obtained from the given
// one by exchange a ones digit and a tens digit (for example, 123 will be
// changed to 132).

// Function to obtain an integer by exchanging the ones digit and the tens digit of a given three-digit integer
function exchangeDigits(number) {
    // Extract the ones digit
    const ones = number % 10;
    
    // Extract the tens digit
    const tens = Math.floor((number % 100) / 10);
    
    // Extract the hundreds digit
    const hundreds = Math.floor(number / 100);
  
    // Combine the digits with the ones and tens digits exchanged
    const newNumber = hundreds * 100 + ones * 10 + tens;
    
    // Return the new integer
    return newNumber;
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const exchangedNumber = exchangeDigits(number);
  
  console.log(`The integer obtained by exchanging the ones and tens digits of ${number} is ${exchangedNumber}.`);
  