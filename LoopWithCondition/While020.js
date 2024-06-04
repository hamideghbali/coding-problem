// An integer N (> 0) is given. Determine whether its decimal representation
// contains a digit ‖2‖ or not, and output True or False respectively. Use the
// operators of integer division and taking the remainder after integer division.

function containsDigitTwo(N) {
    while (N > 0) {
        let digit = N % 10;
        if (digit === 2) {
            return true;
        }
        N = Math.floor(N / 10);
    }
    return false;
}

// Example usage:
let N = 12345; // Change N to any positive integer
let result = containsDigitTwo(N);
console.log("Does the decimal representation of", N + " contain the digit 2?", result);
