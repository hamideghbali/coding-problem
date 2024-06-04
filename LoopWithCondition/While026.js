// Given an integer N (> 1) that is a Fibonacci number: N = FK, output
// previous and next Fibonacci numbers: FK−1 and FK+1 (see the Fibonacci
// numbers definition in While24).

function findPreviousAndNextFibonacci(N) {
    let F1 = 1;
    let F2 = 1;
    let FK = F1 + F2;

    // Find the Fibonacci number just less than N
    while (FK <= N) {
        F1 = F2;
        F2 = FK;
        FK = F1 + F2;
    }

    // Now F2 is FK-1 and FK is Fk+1
    let previousFibonacci = F2;
    let nextFibonacci = FK;

    return [previousFibonacci, nextFibonacci];
}

// Example usage:
let N = 8; // Change N to any Fibonacci number greater than 1
let [previousFibonacci, nextFibonacci] = findPreviousAndNextFibonacci(N);
console.log("Previous Fibonacci number:", previousFibonacci);
console.log("Next Fibonacci number:", nextFibonacci);
