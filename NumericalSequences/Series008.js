// An integer N and a sequence of N integers are given. Output in the same
// order all even-valued elements of the sequence and also their amount K.

function evenElementsAndCount(N, sequence) {
    let evenElements = [];
    let countOfEvens = 0;

    // Iterate over the sequence
    for (let i = 0; i < N; i++) {
        // Check if the current element is even
        if (sequence[i] % 2 === 0) {
            evenElements.push(sequence[i]); // Add even element to the array
            countOfEvens++; // Increment count of even elements
        }
    }

    return { evenElements, countOfEvens };
}

// Example usage
const N = 7; // Number of elements in the sequence
const sequence = [1, 2, 3, 4, 5, 6, 7]; // Example sequence of integers

const { evenElements, countOfEvens } = evenElementsAndCount(N, sequence);

console.log("Even-valued elements:", evenElements);
console.log("Number of even elements:", countOfEvens);
