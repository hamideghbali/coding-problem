// An integer N and a sequence of N integers are given. Find the maximal
// amount of the successive elements with the minimal value.

function maxSuccessiveMinElements(N, sequence) {
    let minElement = Math.min(...sequence);
    let maxCount = 0;
    let currentCount = 0;

    // Iterate through the sequence and find the maximal amount of successive elements with the minimal value
    for (let i = 0; i < N; i++) {
        if (sequence[i] === minElement) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0; // Reset the count if the current element is not the minimal element
        }
    }

    return maxCount;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 2, 1, 1, 1, 2, 3]; // Example sequence of N integers
const maxSuccessiveMin = maxSuccessiveMinElements(N, sequence);
console.log("Maximal amount of successive elements with the minimal value:", maxSuccessiveMin);
