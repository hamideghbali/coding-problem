// Write a logical function IsPowerN(K, N) that returns True, if an positive
// integer parameter K is equal to N (> 1) raised to some integer power, and False
// otherwise. Having input an integer N (> 1) and a sequence of 10 positive
// integers and using this function, find the amount of powers of base N in the
// given sequence.

// Function to check if a number is a power of N
function isPowerN(K, N) {
    while (K > 1) {
        if (K % N !== 0) {
            return false;
        }
        K = Math.floor(K / N);
    }
    return K === 1;
}

// Function to count powers of N in a sequence
function countPowersOfN(sequence, N) {
    let count = 0;
    for (let num of sequence) {
        if (isPowerN(num, N)) {
            count++;
        }
    }
    return count;
}

// Example: Find the amount of powers of base N in a given sequence of 10 positive integers
const N = 3; // Set the base value
const sequence = [1, 3, 9, 5, 27, 15, 81, 7, 8, 243]; // Example sequence
const powerCount = countPowersOfN(sequence, N);
console.log("Number of powers of base", N + ":", powerCount);
