// An integer N (> 1) is given. An integer-valued sequence of the Fibonacci
// numbers FK is defined as:

// F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, ... .

// Determine whether N is a Fibonacci number or not, and output True or False
// respectively.

function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

function isFibonacci(N) {
    return isPerfectSquare(5 * N * N + 4) || isPerfectSquare(5 * N * N - 4);
}

// Example usage:
let N = 8; // Change N to any positive integer
let result = isFibonacci(N);
console.log(N + " is a Fibonacci number:", result);
