// Write an integer function Fib(N) that returns the value of N-th term of the
// sequence of the Fibonacci numbers. The Fibonacci numbers FK are defined as
// follows:

// F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, ... .

// Using this function, find five Fibonacci numbers with given order numbers N1,
// N2, ..., N5.

function Fib(N) {
    if (N === 1 || N === 2) {
        return 1;
    }
    let prev = 1;
    let curr = 1;
    for (let i = 3; i <= N; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

// Example usage
const orderNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < orderNumbers.length; i++) {
    console.log(`Fibonacci number with order number ${orderNumbers[i]}: ${Fib(orderNumbers[i])}`);
}
