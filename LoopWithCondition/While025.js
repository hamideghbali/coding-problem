// Given an integer N (> 1), find the first Fibonacci number greater than N
// (see the Fibonacci numbers definition in While24).

function findNextFibonacci(N) {
    let F1 = 1;
    let F2 = 1;
    let FK = F1 + F2;

    while (FK <= N) {
        F1 = F2;
        F2 = FK;
        FK = F1 + F2;
    }

    return FK;
}

// Example usage:
let N = 10; // Change N to any positive integer
let nextFibonacci = findNextFibonacci(N);
console.log("The first Fibonacci number greater than", N + ":", nextFibonacci);
