// Write a logical function Even(K) that returns True, if an integer parameter K
// is an even number, and False otherwise. Using this function, find the amount
// of even numbers in a given sequence of 10 integers.

function Even(K) {
    return K % 2 === 0;
}

// Example usage
const sequence = [5, 8, 12, 7, 6, 10, 3, 9, 2, 11];
let evenCount = 0;

for (let i = 0; i < sequence.length; i++) {
    if (Even(sequence[i])) {
        evenCount++;
    }
}

console.log(`Amount of even numbers in the sequence: ${evenCount}`);
