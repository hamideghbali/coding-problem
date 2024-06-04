// Write an integer function Fib(N) that returns the value of N-th term of the
// sequence of the Fibonacci numbers. The Fibonacci numbers FK are defined as
// follows:

// F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, ... .

// Using this function, find five Fibonacci numbers with given order numbers N1,
// N2, ..., N5.

// Function to calculate the N-th Fibonacci number
function fib(N) {
    if (N === 1 || N === 2) {
        return 1;
    }
    let fibPrev = 1;
    let fibCurr = 1;
    for (let i = 3; i <= N; i++) {
        const fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }
    return fibCurr;
}

// Example usage:
const orderNumbers = [1, 2, 3, 4, 5];
const fibonacciNumbers = orderNumbers.map(fib);
console.log("Fibonacci Numbers:", fibonacciNumbers);
