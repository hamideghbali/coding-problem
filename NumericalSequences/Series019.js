// An integer N (> 1) and a sequence of N integers are given. Output the
// elements that are less than their left-side neighbor. Also output the amount K
// of such elements.

function elementsLessThanLeftNeighbor(sequence) {
    let count = 0;
    const elements = [];

    // Start from the second element (index 1) since there's no left neighbor for the first element
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] < sequence[i - 1]) {
            elements.push(sequence[i]);
            count++;
        }
    }

    return { elements, count };
}

// Example usage
const N = 5;
const sequence = [1, 3, 2, 5, 4]; // Example sequence
const { elements, count } = elementsLessThanLeftNeighbor(sequence);
console.log("Elements less than their left-side neighbor:", elements); // Output: [2, 4]
console.log("Amount of such elements:", count); // Output: 2
