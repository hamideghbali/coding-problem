// Write a logical function IsPower5(K) that returns True, if an positive integer
// parameter K is equal to 5 raised to some integer power, and False otherwise.
// Using this function, find the amount of powers of base 5 in a given sequence
// of 10 positive integers.

// Function to check if a number is a power of 5
function isPower5(K) {
    while (K > 1) {
        if (K % 5 !== 0) {
            return false;
        }
        K = Math.floor(K / 5);
    }
    return K === 1;
}

// Function to count powers of 5 in a sequence
function countPowersOf5(sequence) {
    let count = 0;
    for (let num of sequence) {
        if (isPower5(num)) {
            count++;
        }
    }
    return count;
}

// Example: Find the amount of powers of base 5 in a given sequence of 10 positive integers
const sequence = [1, 5, 25, 3, 125, 30, 625, 7, 8, 625];
const powerCount = countPowersOf5(sequence);
console.log("Number of powers of base 5:", powerCount);
