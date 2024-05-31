// Given an integer N (> 0), find the value of a following product of N factors:

// 1.1 · 1.2 · 1.3 · ... .

function productOfFactors(N) {
    let product = 1.1; // Starting from 1.1
    for (let i = 2; i <= N; i++) {
        product *= (1 + (i - 1) * 0.1);
    }
    return product;
}

// Example usage:
const N = 5;
const result = productOfFactors(N);
console.log(`Product of ${N} factors starting from 1.1 is: ${result}`);
