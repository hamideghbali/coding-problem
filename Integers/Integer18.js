// An integer greater than 999 is given. Using one operator of integer
// division and one operator of taking the remainder find a thousands digit of the
// given integer.

// Function to find the thousands digit of an integer greater than 999
function thousandsDigit(number) {
    // Divide the number by 1000 and use remainder operator to get thousands digit
    const thousands = Math.floor(number / 1000) % 10;
    
    // Return the thousands digit
    return thousands;
  }
  
  // Example usage:
  const number = 12345; // Integer greater than 999
  const digit = thousandsDigit(number);
  
  console.log(`The thousands digit of ${number} is ${digit}.`);
  