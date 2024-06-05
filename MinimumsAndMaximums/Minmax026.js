// An integer N and a sequence of N integers are given. Output the maximal
// amount of successive elements whose values are even numbers. If the
// sequence does not contain even numbers then output 0.

function maxSuccessiveEvenElements(N, sequence) {
    let maxCount = 0;
    let currentCount = 0;

    // Iterate through the sequence and find the maximal amount of successive even elements
    for (let i = 0; i < N; i++) {
        if (sequence[i] % 2 === 0) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0; // Reset the count if the current element is not even
        }
    }

    return maxCount;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 10, 4, 6]; // Example sequence of N integers
const maxSuccessiveEven = maxSuccessiveEvenElements(N, sequence);
console.log("Maximal amount of successive even elements:", maxSuccessiveEven);
