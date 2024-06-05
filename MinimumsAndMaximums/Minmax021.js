// An integer N (> 2) and a sequence of N real numbers are given. The
// elements of the sequence represent some experimental data. Find the average
// of the experimental data provided that the minimal and maximal values must
// be ignored.

function calculateAverageWithoutMinMax(N, sequence) {
    let min = sequence[0];
    let max = sequence[0];
    let sum = sequence[0];

    // Find the minimal and maximal values in the sequence
    for (let i = 1; i < N; i++) {
        sum += sequence[i];
        if (sequence[i] < min) {
            min = sequence[i];
        }
        if (sequence[i] > max) {
            max = sequence[i];
        }
    }

    // Calculate the average without considering the minimal and maximal values
    return (sum - min - max) / (N - 2);
}

// Example usage:
const N = 5; // Example value of N
const sequence = [3, 7, 1, 8, 5]; // Example sequence of N real numbers
const averageWithoutMinMax = calculateAverageWithoutMinMax(N, sequence);
console.log("Average of experimental data without considering minimal and maximal values:", averageWithoutMinMax);
