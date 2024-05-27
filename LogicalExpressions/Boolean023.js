// Given a four-digit integer, verify the following proposition: ―The
// number is read equally both from left to right and from right to left‖.

// Function to verify if a four-digit integer is read equally both from left to right and from right to left
function isPalindrome(number) {
    const digit1 = Math.floor(number / 1000); // Extract thousands digit
    const digit2 = Math.floor((number % 1000) / 100); // Extract hundreds digit
    const digit3 = Math.floor((number % 100) / 10); // Extract tens digit
    const digit4 = number % 10; // Extract ones digit
    
    // Check if the number is a palindrome
    return digit1 === digit4 && digit2 === digit3;
  }
  
  // Example usage:
  const number = 1231; // Example four-digit integer
  const result = isPalindrome(number);
  
  if (result) {
    console.log(`The number ${number} is read equally both from left to right and from right to left.`);
  } else {
    console.log(`The number ${number} is not read equally both from left to right and from right to left.`);
  }
  