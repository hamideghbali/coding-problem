// Write a logical function Even(K) that returns True, if an integer parameter K
// is an even number, and False otherwise. Using this function, find the amount
// of even numbers in a given sequence of 10 integers.

// Define the Even function
function Even(K) {
    // Check if K is even
    return K % 2 === 0;
}

// Function to count even numbers in a sequence
function countEvenNumbers(sequence) {
    let count = 0;
    // Iterate over the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current number is even using the Even function
        if (Even(sequence[i])) {
            count++;
        }
    }
    return count;
}

// Example: Find the amount of even numbers in a given sequence of 10 integers
let sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = countEvenNumbers(sequence);
console.log("Number of even numbers:", evenCount);
