// Write a logical function IsPalindrome(K) that returns True, if the decimal
// representation of a positive parameter K is a palindrome (i. e., it is read equally
// both from left to right and from right to left), and False otherwise. Using this
// function, find the amount of palindromes in a given sequence of 10 positive
// integers.

function IsPalindrome(K) {
    const strK = K.toString();
    const len = strK.length;
    for (let i = 0; i < len / 2; i++) {
        if (strK[i] !== strK[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Example usage
const sequence = [121, 12321, 123321, 123454321, 1234321, 987654321, 123456789, 112211, 123321123, 12344321];
let palindromeCount = 0;

for (let i = 0; i < sequence.length; i++) {
    if (IsPalindrome(sequence[i])) {
        palindromeCount++;
    }
}

console.log(`Amount of palindromes in the sequence: ${palindromeCount}`);
