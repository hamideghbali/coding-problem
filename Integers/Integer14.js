// A three-digit integer is given. Output an integer obtained from the given
// one by moving its right digit to the left side.

// Function to obtain an integer by moving the rightmost digit to the left side of a given three-digit integer
function moveRightmostDigit(number) {
    // Extract the rightmost digit (ones digit)
    const rightmostDigit = number % 10;
    
    // Extract the remaining two digits
    const remainingDigits = Math.floor(number / 10);
    
    // Combine the rightmost digit moved to the left side with the remaining digits
    const newNumber = rightmostDigit * 100 + remainingDigits;
    
    // Return the new integer
    return newNumber;
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const modifiedNumber = moveRightmostDigit(number);
  
  console.log(`The integer obtained by moving the rightmost digit of ${number} to the left side is ${modifiedNumber}.`);
  