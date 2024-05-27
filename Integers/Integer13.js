// A three-digit integer is given. Output an integer obtained from the given
// one by moving its left digit to the right side.

// Function to obtain an integer by moving the leftmost digit to the right side of a given three-digit integer
function moveLeftmostDigit(number) {
    // Extract the leftmost digit (hundreds digit)
    const leftmostDigit = Math.floor(number / 100);
    
    // Extract the remaining two digits
    const remainingDigits = number % 100;
    
    // Combine the remaining digits with the leftmost digit moved to the right side
    const newNumber = remainingDigits * 10 + leftmostDigit;
    
    // Return the new integer
    return newNumber;
  }
  
  // Example usage:
  const number = 456; // Three-digit integer
  const modifiedNumber = moveLeftmostDigit(number);
  
  console.log(`The integer obtained by moving the leftmost digit of ${number} to the right side is ${modifiedNumber}.`);
  