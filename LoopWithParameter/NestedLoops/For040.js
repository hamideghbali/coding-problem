// Integers A and B (A < B) are given. Output all integers in the range A to B,
// with the number A being output once, the number A + 1 being output twice,
// and so on.

function outputIntegersWithIncreasingFrequency(A, B) {
    let count = 1; // Initialize the count to 1

    for (let i = A; i <= B; i++) {
        for (let j = 0; j < count; j++) {
            console.log(i);
        }
        count++; // Increment the count for the next integer
    }
}

// Example usage:
let A = 3; // Change A to any positive integer
let B = 6; // Change B to any positive integer greater than A
outputIntegersWithIncreasingFrequency(A, B);
