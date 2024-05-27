// A three-digit integer is given. Using one operator of integer division find
// first digit of the given integer (a hundreds digit).

// Function to find the first digit (hundreds digit) of a three-digit integer using integer division
function hundredsDigit(number) {
    // Divide the number by 100 and floor the result to get the hundreds digit
    const hundreds = Math.floor(number / 100);
    
    // Return the hundreds digit
    return hundreds;
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const firstDigit = hundredsDigit(number);
  
  console.log(`The first digit (hundreds digit) of ${number} is ${firstDigit}.`);
  