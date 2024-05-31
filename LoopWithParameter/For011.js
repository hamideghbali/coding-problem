// Given an integer N (> 0), find the value of a following sum (as an integer):

// N^2 + (N + 1)^2 + (N + 2)^2 + ... + (2·N)^2

function sumOfSquaredIntegers(N) {
    let sum = 0;
    for (let i = N; i <= 2 * N; i++) {
        sum += i * i;
    }
    return sum;
}

// Example usage:
const N = 3;
const result = sumOfSquaredIntegers(N);
console.log(`Sum of squares from ${N} to ${2 * N} is: ${result}`);
