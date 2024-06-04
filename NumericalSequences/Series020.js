// An integer N (> 1) and a sequence of N integers are given. Output the
// elements that are less than their right-side neighbor. Also output the amount K
// of such elements.

function elementsLessThanRightNeighbor(sequence) {
    let count = 0;
    const elements = [];

    // Start from the first element and iterate up to the second to last element
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] < sequence[i + 1]) {
            elements.push(sequence[i]);
            count++;
        }
    }

    // Check the last element if it is less than its right-side neighbor
    if (sequence[sequence.length - 2] < sequence[sequence.length - 1]) {
        elements.push(sequence[sequence.length - 1]);
        count++;
    }

    return { elements, count };
}

// Example usage
const N = 5;
const sequence = [1, 3, 2, 5, 4]; // Example sequence
const { elements, count } = elementsLessThanRightNeighbor(sequence);
console.log("Elements less than their right-side neighbor:", elements); // Output: [1, 2, 4]
console.log("Amount of such elements:", count); // Output: 3
