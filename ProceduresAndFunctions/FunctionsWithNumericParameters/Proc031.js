// Write a logical function IsPalindrome(K) that returns True, if the decimal
// representation of a positive parameter K is a palindrome (i. e., it is read equally
// both from left to right and from right to left), and False otherwise. Using this
// function, find the amount of palindromes in a given sequence of 10 positive
// integers.

// Function to check if the decimal representation of a positive integer K is a palindrome
function isPalindrome(K) {
    const str = String(K);
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false; // Return false if characters don't match
        }
    }
    return true; // Return true if all characters match
}

// Example usage:
const numbers = [12321, 12345, 123321, 45654, 9876789, 1233210, 123454321, 121212, 987678, 876543];
let palindromeCount = 0;
for (let num of numbers) {
    if (isPalindrome(num)) {
        palindromeCount++;
    }
}
console.log("Number of palindromes:", palindromeCount);
