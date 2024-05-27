// Given a three-digit integer, verify the following proposition: ―All digits
// of the number are in ascending order‖.\

// Function to verify if all digits of a three-digit integer are in ascending order
function areDigitsAscending(number) {
    const digit1 = Math.floor(number / 100); // Extract hundreds digit
    const digit2 = Math.floor((number % 100) / 10); // Extract tens digit
    const digit3 = number % 10; // Extract ones digit
    
    // Check if all digits are in ascending order
    if (digit1 < digit2 && digit2 < digit3) {
      return true; // All digits are in ascending order
    } else {
      return false; // At least one pair of digits is not in ascending order
    }
  }
  
  // Example usage:
  const number = 123; // Example three-digit integer
  const result = areDigitsAscending(number);
  
  if (result) {
    console.log(`All digits of the number ${number} are in ascending order.`);
  } else {
    console.log(`At least one pair of digits of the number ${number} is not in ascending order.`);
  }
  