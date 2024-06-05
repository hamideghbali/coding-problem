// A positive real number B and a sequence of 10 real numbers are given.
// Find the minimum among elements that are greater than B and output its value
// and its order number. If the sequence does not contain elements greater than B
// then output 0 twice (the first zero as a real number, the second zero as an
// integer).

function findMinimumGreaterThanB(B, sequence) {
    let minGreaterB = Infinity;
    let minGreaterBOrderNumber = 0;
    let foundGreaterThanB = false;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] > B) {
            if (sequence[i] < minGreaterB) {
                minGreaterB = sequence[i];
                minGreaterBOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
            }
            foundGreaterThanB = true;
        }
    }

    if (foundGreaterThanB) {
        return { value: minGreaterB, orderNumber: minGreaterBOrderNumber };
    } else {
        return { value: 0, orderNumber: 0 };
    }
}

// Example usage:
const B = 3; // Example value of B
const sequence = [2, 5, 1, 4, 6, 7, 3, 8, 9, 10]; // Example sequence of 10 real numbers
const { value, orderNumber } = findMinimumGreaterThanB(B, sequence);
console.log("Minimum value greater than B:", value);
console.log("Order number of the minimum value greater than B:", orderNumber);
