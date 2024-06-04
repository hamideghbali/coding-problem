// Write a logical function IsPrime(N) that returns True, if an integer
// parameter N (> 1) is a prime number, and False otherwise. Using this function,
// find the amount of prime numbers in a given sequence of 10 integers greater
// than 1. Note that an integer (> 1) is called a prime number if it has not positive
// divisors except 1 and itself.

function IsPrime(N) {
    if (N <= 1) {
        return false;
    }
    if (N <= 3) {
        return true;
    }
    if (N % 2 === 0 || N % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= N) {
        if (N % i === 0 || N % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Example usage
const sequence = [2, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let primeCount = 0;

for (let i = 0; i < sequence.length; i++) {
    if (IsPrime(sequence[i])) {
        primeCount++;
    }
}

console.log(`Amount of prime numbers in the sequence: ${primeCount}`);
