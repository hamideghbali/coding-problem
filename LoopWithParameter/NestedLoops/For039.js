// Positive integers A and B (A < B) are given. Output all integers in the range A
// to B, with an integer of a value K being output K times (for example, the
// number 3 must be output 3 times).

function outputIntegersWithFrequency(A, B) {
    for (let i = A; i <= B; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i);
        }
    }
}

// Example usage:
let A = 3; // Change A to any positive integer
let B = 6; // Change B to any positive integer greater than A
outputIntegersWithFrequency(A, B);
