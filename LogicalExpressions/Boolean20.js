// Given a three-digit integer, verify the following proposition: ―All digits
// of the number are different‖.

// Function to verify if all digits of a three-digit integer are different
function areDigitsDifferent(number) {
    const digit1 = Math.floor(number / 100); // Extract hundreds digit
    const digit2 = Math.floor((number % 100) / 10); // Extract tens digit
    const digit3 = number % 10; // Extract ones digit
    
    // Check if all digits are different
    if (digit1 !== digit2 && digit1 !== digit3 && digit2 !== digit3) {
      return true; // All digits are different
    } else {
      return false; // At least two digits are the same
    }
  }
  
  // Example usage:
  const number = 123; // Example three-digit integer
  const result = areDigitsDifferent(number);
  
  if (result) {
    console.log(`All digits of the number ${number} are different.`);
  } else {
    console.log(`At least two digits of the number ${number} are the same.`);
  }
  