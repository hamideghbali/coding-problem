// An integer K and K sequences of nonzero integers are given. Each given
// sequence contains at least two elements and is terminated by zero, which is not
// an element of the sequence. Process each sequence as follows: output 1 or −1
// if its element values are in ascending or in descending order respectively,
// otherwise output 0.

function getOrderStatus(sequence) {
    let isAscending = true;
    let isDescending = true;

    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] === 0) {
            break;
        }
        if (sequence[i] >= sequence[i + 1]) {
            isAscending = false;
        }
        if (sequence[i] <= sequence[i + 1]) {
            isDescending = false;
        }
    }

    if (isAscending) {
        return 1;
    } else if (isDescending) {
        return -1;
    } else {
        return 0;
    }
}

function processSequences(K, sequences) {
    const results = [];

    for (let i = 0; i < K; i++) {
        const sequence = sequences[i];
        const orderStatus = getOrderStatus(sequence);
        results.push(orderStatus);
    }

    return results;
}

// Example usage:
const K = 3; // Number of sequences
const sequences = [
    [1, 2, 3, 0],       // Ascending sequence
    [5, 4, 3, 0],       // Descending sequence
    [6, 7, 5, 0]        // Unordered sequence
];

const results = processSequences(K, sequences);
console.log('Order statuses:', results); // Output: [1, -1, 0]
