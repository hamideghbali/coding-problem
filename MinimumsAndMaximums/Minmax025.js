// An integer N (> 1) and a sequence of N real numbers are given. Find two
// adjacent elements that have the minimal product of their values and output
// their order numbers in ascending order.

function findMinProductOrderNumbers(N, sequence) {
    let minProduct = Infinity;
    let minProductOrderNumbers = [];

    // Iterate through the sequence and find the order numbers of two adjacent elements with the minimal product
    for (let i = 0; i < N - 1; i++) {
        const product = sequence[i] * sequence[i + 1];
        if (product < minProduct) {
            minProduct = product;
            minProductOrderNumbers = [i + 1, i + 2]; // Adding 1 to convert from zero-based index to one-based order numbers
        }
    }

    return minProductOrderNumbers;
}

// Example usage:
const N = 5; // Example value of N
const sequence = [3, -2, 1, -4, 5]; // Example sequence of N real numbers
const minProductOrderNumbers = findMinProductOrderNumbers(N, sequence);
console.log("Order numbers of two adjacent elements with minimal product:", minProductOrderNumbers);
