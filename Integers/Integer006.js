// // A two-digit integer is given. Output its left digit (a tens digit) and then its
// right digit (a ones digit). Use the operator of integer division for obtaining the
// tens digit and the operator of taking remainder for obtaining the ones digit.

// Function to extract the left (tens) and right (ones) digits of a two-digit integer
function extractDigits(number) {
    // Extract the tens digit using integer division
    const tens = Math.floor(number / 10);
    
    // Extract the ones digit using the remainder operator
    const ones = number % 10;
    
    // Return the extracted digits
    return [tens, ones];
  }
  
  // Example usage:
  const number = 56; // Two-digit integer
  const [tensDigit, onesDigit] = extractDigits(number);
  
  console.log(`The tens digit of ${number} is ${tensDigit}`);
  console.log(`The ones digit of ${number} is ${onesDigit}`);
  