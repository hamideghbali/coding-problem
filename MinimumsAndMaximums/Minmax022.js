// An integer N (> 2) and a sequence of N real numbers are given. Find two
// smallest elements of the sequence and output their values in ascending order.

function findTwoSmallest(N, sequence) {
    let smallest1 = Infinity;
    let smallest2 = Infinity;

    // Find the two smallest elements in the sequence
    for (let i = 0; i < N; i++) {
        if (sequence[i] < smallest1) {
            smallest2 = smallest1;
            smallest1 = sequence[i];
        } else if (sequence[i] < smallest2 && sequence[i] !== smallest1) {
            smallest2 = sequence[i];
        }
    }

    return [smallest1, smallest2];
}

// Example usage:
const N = 5; // Example value of N
const sequence = [3, 7, 1, 8, 5]; // Example sequence of N real numbers
const [smallest1, smallest2] = findTwoSmallest(N, sequence);
console.log("Two smallest elements in ascending order:", smallest1, smallest2);
