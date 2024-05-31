// Given an integer N (> 0), compute N^2
// by means of the formula

// // N^2= 1 + 3 + 5 + ... + (2·N − 1).
// Output the value of the sum after addition of each term. As a result, squares of
// all integers in the range 1 to N will be output.

function computeNSquared(N) {
    let sum = 0;
    for (let i = 1; i <= 2 * N - 1; i += 2) {
        sum += i;
        console.log(`Sum after adding term ${i}: ${sum}`);
    }
    return sum;
}

// Example usage:
const N = 5;
console.log(`Computing ${N}^2:`);
computeNSquared(N);
