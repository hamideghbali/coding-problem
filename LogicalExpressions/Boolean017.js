// Given a positive integer, verify the following proposition: ―The integer
// is a three-digit odd number‖.

// Function to verify if the integer is a three-digit odd number
function isThreeDigitOddNumber(number) {
    // Check if the number is a three-digit odd number
    if (number >= 100 && number < 1000 && number % 2 !== 0) {
      return true; // The number is a three-digit odd number
    } else {
      return false; // The number is not a three-digit odd number
    }
  }
  
  // Example usage:
  const number = 357; // Example positive integer
  const result = isThreeDigitOddNumber(number);
  
  if (result) {
    console.log(`The integer ${number} is a three-digit odd number.`);
  } else {
    console.log(`The integer ${number} is not a three-digit odd number.`);
  }
  