// A three-digit integer is given. Output its last digit (a ones digit) and then
// its middle digit (a tens digit).

// Function to output the last digit (ones digit) and then the middle digit (tens digit) of a three-digit integer
function lastAndMiddleDigits(number) {
    // Extract the ones digit using the remainder operator
    const ones = number % 10;
    
    // Remove the ones digit and then extract the tens digit using integer division
    const tens = Math.floor(number / 10) % 10;
    
    // Return the last digit (ones digit) and middle digit (tens digit)
    return { ones, tens };
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const { ones, tens } = lastAndMiddleDigits(number);
  
  console.log(`The last digit (ones digit) of ${number} is ${ones}.`);
  console.log(`The middle digit (tens digit) of ${number} is ${tens}.`);
  