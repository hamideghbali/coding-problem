// An integer greater than 999 is given. Using one operator of integer
// division and one operator of taking the remainder find a hundreds digit of the
// given integer.

// Function to find the hundreds digit of an integer greater than 999
function hundredsDigit(number) {
    // Divide the number by 100 and use remainder operator to get hundreds digit
    const hundreds = Math.floor(number / 100) % 10;
    
    // Return the hundreds digit
    return hundreds;
  }
  
  // Example usage:
  const number = 3456; // Integer greater than 999
  const digit = hundredsDigit(number);
  
  console.log(`The hundreds digit of ${number} is ${digit}.`);
  