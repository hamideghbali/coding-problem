// Given an integer N (> 0), find the value of a following sum (as a real
//     number):
    
//     1 + 1/2 + 1/3 + ... + 1/N.

function sumOfReciprocals(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += 1 / i;
    }
    return sum;
}

// Example usage:
const N = 5;
const result = sumOfReciprocals(N);
console.log(`Sum of reciprocals from 1 to ${N} is: ${result}`);
