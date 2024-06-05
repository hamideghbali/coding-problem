// An integer N and a sequence of N integers are given. Find the amount of
// the elements that are located after the last maximal element.

function countElementsAfterLastMax(N, sequence) {
    let maxIndex = 0;

    // Find the index of the last maximal element
    for (let i = 1; i < N; i++) {
        if (sequence[i] >= sequence[maxIndex]) {
            maxIndex = i;
        }
    }

    return N - maxIndex - 1;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 2]; // Example sequence of N integers
const elementsAfterLastMax = countElementsAfterLastMax(N, sequence);
console.log("Number of elements after the last maximal element:", elementsAfterLastMax);
