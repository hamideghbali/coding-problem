// An integer N and a sequence of N integers are given. Find the amount of
// the elements that are located between the first and the last maximal element. If
// the sequence contains the unique maximal element then output 0.

function countElementsBetweenMaximals(N, sequence) {
    let firstMaxIndex = 0;
    let lastMaxIndex = 0;

    // Find the index of the first maximal element
    for (let i = 1; i < N; i++) {
        if (sequence[i] > sequence[firstMaxIndex]) {
            firstMaxIndex = i;
        }
    }

    // Find the index of the last maximal element
    for (let i = 0; i < N; i++) {
        if (sequence[i] >= sequence[lastMaxIndex]) {
            lastMaxIndex = i;
        }
    }

    if (firstMaxIndex === lastMaxIndex) {
        return 0; // Unique maximal element, so output 0
    } else {
        // Calculate the number of elements between the first and last maximal elements
        return Math.abs(lastMaxIndex - firstMaxIndex) - 1;
    }
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 2]; // Example sequence of N integers
const elementsBetweenMaximals = countElementsBetweenMaximals(N, sequence);
console.log("Number of elements between the first and last maximal element:", elementsBetweenMaximals);
