// An integer N and a sequence of N integers are given. Find the amount of
// the elements that are located before the first minimal element.

function countElementsBeforeFirstMin(N, sequence) {
    let minIndex = 0;

    // Find the index of the first minimal element
    for (let i = 1; i < N; i++) {
        if (sequence[i] < sequence[minIndex]) {
            minIndex = i;
            break; // Exit the loop as soon as the first minimal element is found
        }
    }

    return minIndex;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 2]; // Example sequence of N integers
const elementsBeforeFirstMin = countElementsBeforeFirstMin(N, sequence);
console.log("Number of elements before the first minimal element:", elementsBeforeFirstMin);
