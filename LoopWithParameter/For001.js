// Given integers K and N (N > 0), output the number K N times.

function printNumberNTimes(K, N) {
    // Check if N is positive
    if (N <= 0) {
        return "N must be greater than 0";
    }

    // Print the number K N times
    for (let i = 0; i < N; i++) {
        console.log(K);
    }
}

// Example usage:
printNumberNTimes(5, 3);
// Output:
// 5
// 5
// 5

printNumberNTimes(10, 5);
// Output:
// 10
// 10
// 10
// 10
// 10
