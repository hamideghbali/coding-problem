// Given two integers A and B (A < B), output in ascending order all integers in
// the range A to B (including A and B). Also output the amount N of these
// integers.

function integersInRange(A, B) {
    let result = [];
    let count = 0;
    for (let i = A; i <= B; i++) {
        result.push(i);
        count++;
    }
    return { integers: result, count: count };
}

// Example usage:
const range = integersInRange(3, 8);
console.log(range.integers); // Output: [3, 4, 5, 6, 7, 8]
console.log(range.count);    // Output: 6
