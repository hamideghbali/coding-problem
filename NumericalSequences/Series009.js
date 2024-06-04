// An integer N and a sequence of N integers are given. Output in the same
// order the order numbers of all odd-valued elements of the sequence and also
// their amount K.

function oddIndicesAndCount(N, sequence) {
    let oddIndices = [];
    let countOfOdds = 0;

    // Iterate over the sequence
    for (let i = 0; i < N; i++) {
        // Check if the current element is odd
        if (sequence[i] % 2 !== 0) {
            oddIndices.push(i); // Add index of odd element to the array
            countOfOdds++; // Increment count of odd elements
        }
    }

    return { oddIndices, countOfOdds };
}

// Example usage
const N = 7; // Number of elements in the sequence
const sequence = [1, 2, 3, 4, 5, 6, 7]; // Example sequence of integers

const { oddIndices, countOfOdds } = oddIndicesAndCount(N, sequence);

console.log("Order numbers of odd-valued elements:", oddIndices);
console.log("Number of odd elements:", countOfOdds);
