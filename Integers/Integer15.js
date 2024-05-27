// A three-digit integer is given. Output an integer obtained from the given
// one by exchange a tens digit and a hundreds digit (for example, 123 will be
// changed to 213).
// Function to obtain an integer by exchanging the tens digit and the hundreds digit of a given three-digit integer
function exchangeDigits(number) {
    // Extract the tens digit
    const tens = Math.floor((number % 100) / 10);
    
    // Extract the hundreds digit
    const hundreds = Math.floor(number / 100);
    
    // Extract the ones digit
    const ones = number % 10;
  
    // Combine the digits with the tens and hundreds digits exchanged
    const newNumber = hundreds * 100 + tens * 10 + ones;
    
    // Return the new integer
    return newNumber;
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const exchangedNumber = exchangeDigits(number);
  
  console.log(`The integer obtained by exchanging the tens and hundreds digits of ${number} is ${exchangedNumber}.`);
  