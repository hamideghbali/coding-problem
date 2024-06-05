// An integer N and a sequence of N integers are given. Find the minimal
// amount of the successive elements with the maximal value.

function minSuccessiveMaxElements(N, sequence) {
    let maxElement = Math.max(...sequence);
    let minCount = Infinity;
    let currentCount = 0;

    // Iterate through the sequence and find the minimal amount of successive elements with the maximal value
    for (let i = 0; i < N; i++) {
        if (sequence[i] === maxElement) {
            currentCount++;
        } else {
            if (currentCount < minCount) {
                minCount = currentCount;
            }
            currentCount = 0; // Reset the count if the current element is not the maximal element
        }
    }

    // Check the count after the loop in case the last element(s) is/are maximal
    if (currentCount < minCount) {
        minCount = currentCount;
    }

    return minCount;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 2, 1, 3, 3, 2, 3]; // Example sequence of N integers
const minSuccessiveMax = minSuccessiveMaxElements(N, sequence);
console.log("Minimal amount of successive elements with the maximal value:", minSuccessiveMax);
