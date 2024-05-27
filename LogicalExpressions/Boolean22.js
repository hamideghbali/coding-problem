// Given a three-digit integer, verify the following proposition: ―All digits
// of the number are in ascending or descending order‖.

// Function to verify if all digits of a three-digit integer are in ascending or descending order
function areDigitsOrdered(number) {
    const digit1 = Math.floor(number / 100); // Extract hundreds digit
    const digit2 = Math.floor((number % 100) / 10); // Extract tens digit
    const digit3 = number % 10; // Extract ones digit
    
    // Check if all digits are in ascending or descending order
    const isAscending = digit1 < digit2 && digit2 < digit3;
    const isDescending = digit1 > digit2 && digit2 > digit3;
  
    return isAscending || isDescending;
  }
  
  // Example usage:
  const number = 123; // Example three-digit integer
  const result = areDigitsOrdered(number);
  
  if (result) {
    console.log(`All digits of the number ${number} are in ascending or descending order.`);
  } else {
    console.log(`At least one pair of digits of the number ${number} is not in ascending or descending order.`);
  }
  