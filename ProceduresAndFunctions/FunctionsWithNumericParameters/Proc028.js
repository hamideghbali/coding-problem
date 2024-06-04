// Write a logical function IsPrime(N) that returns True, if an integer
// parameter N (> 1) is a prime number, and False otherwise. Using this function,
// find the amount of prime numbers in a given sequence of 10 integers greater
// than 1. Note that an integer (> 1) is called a prime number if it has not positive
// divisors except 1 and itself.

// Function to check if a number is prime
function isPrime(N) {
    if (N <= 1) {
        return false;
    }
    if (N <= 3) {
        return true;
    }
    if (N % 2 === 0 || N % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= N; i += 6) {
        if (N % i === 0 || N % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Function to count prime numbers in a sequence
function countPrimes(sequence) {
    let count = 0;
    for (let num of sequence) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

// Example: Find the number of prime numbers in a given sequence of 10 integers
const sequence = [2, 3, 5, 6, 7, 8, 11, 13, 15, 17]; // Example sequence
const primeCount = countPrimes(sequence);
console.log("Number of prime numbers:", primeCount);
