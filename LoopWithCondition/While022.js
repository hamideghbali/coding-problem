// An integer N (> 1) is given. If it is a prime number, i. e., it has not positive
// divisors except 1 and itself, then output True, otherwise output False.

function isPrime(N) {
    if (N <= 1) {
        return false; // 1 and numbers less than or equal to 1 are not prime
    }

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false; // N is divisible by i, so it's not prime
        }
    }

    return true; // N is only divisible by 1 and itself, so it's prime
}

// Example usage:
let N = 11; // Change N to any positive integer greater than 1
let result = isPrime(N);
console.log("Is", N + " a prime number?", result);
