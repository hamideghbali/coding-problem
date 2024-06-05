// Two real numbers B, C (0 < B < C) and a sequence of 10 real numbers
// are given. Find the maximum among elements that are in the interval (B, C)
// and output its value and its order number. If the sequence does not contain
// elements in the interval (B, C) then output 0 twice (the first zero as a real
// number, the second zero as an integer).

function findMaxInInterval(B, C, sequence) {
    let maxInInterval = -Infinity;
    let maxInIntervalOrderNumber = 0;
    let foundInInterval = false;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] > B && sequence[i] < C) {
            if (sequence[i] > maxInInterval) {
                maxInInterval = sequence[i];
                maxInIntervalOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
            }
            foundInInterval = true;
        }
    }

    if (foundInInterval) {
        return { value: maxInInterval, orderNumber: maxInIntervalOrderNumber };
    } else {
        return { value: 0, orderNumber: 0 };
    }
}

// Example usage:
const B = 2; // Example value of B
const C = 5; // Example value of C
const sequence = [1, 3, 4, 2, 6, 7, 3, 8, 9, 10]; // Example sequence of 10 real numbers
const { value, orderNumber } = findMaxInInterval(B, C, sequence);
console.log("Maximum value in the interval (B, C):", value);
console.log("Order number of the maximum value in the interval (B, C):", orderNumber);
