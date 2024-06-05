// An integer N (> 3) and a sequence of N real numbers are given. Find
// three greatest elements of the sequence and output their values in descending
// order.

function findThreeGreatest(N, sequence) {
    let greatest1 = -Infinity;
    let greatest2 = -Infinity;
    let greatest3 = -Infinity;

    // Find the three greatest elements in the sequence
    for (let i = 0; i < N; i++) {
        if (sequence[i] > greatest1) {
            greatest3 = greatest2;
            greatest2 = greatest1;
            greatest1 = sequence[i];
        } else if (sequence[i] > greatest2 && sequence[i] !== greatest1) {
            greatest3 = greatest2;
            greatest2 = sequence[i];
        } else if (sequence[i] > greatest3 && sequence[i] !== greatest1 && sequence[i] !== greatest2) {
            greatest3 = sequence[i];
        }
    }

    return [greatest1, greatest2, greatest3];
}

// Example usage:
const N = 5; // Example value of N
const sequence = [3, 7, 1, 8, 5]; // Example sequence of N real numbers
const [greatest1, greatest2, greatest3] = findThreeGreatest(N, sequence);
console.log("Three greatest elements in descending order:", greatest1, greatest2, greatest3);
