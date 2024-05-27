// Given a positive integer, verify the following proposition: ―The integer
// is a two-digit even number‖.

// Function to verify if the integer is a two-digit even number
function isTwoDigitEvenNumber(number) {
    // Check if the number is a two-digit even number
    if (number >= 10 && number < 100 && number % 2 === 0) {
      return true; // The number is a two-digit even number
    } else {
      return false; // The number is not a two-digit even number
    }
  }
  
  // Example usage:
  const number = 24; // Example positive integer
  const result = isTwoDigitEvenNumber(number);
  
  if (result) {
    console.log(`The integer ${number} is a two-digit even number.`);
  } else {
    console.log(`The integer ${number} is not a two-digit even number.`);
  }
  