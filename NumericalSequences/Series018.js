// An integer N and a sequence of N integers are given. The values of
// elements of the sequence are in ascending order, the sequence may contain
// equal elements. Output in the same order all distinct elements of the sequence.

function distinctElements(sequence) {
    const distinct = [];
    let prev = null;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] !== prev) {
            distinct.push(sequence[i]);
            prev = sequence[i];
        }
    }

    return distinct;
}

// Example usage
const sequence = [1, 2, 2, 3, 3, 3, 4, 4, 5];
const distinct = distinctElements(sequence);
console.log(distinct); // Output: [1, 2, 3, 4, 5]
