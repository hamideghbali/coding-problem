// Given two integers A and B (A < B), output in descending order all integers in
// the range A to B (excluding A and B). Also output the amount N of these
// integers.


function integersInRangeDescending(A, B) {
    let result = [];
    let count = 0;
    for (let i = B - 1; i > A; i--) {
        result.push(i);
        count++;
    }
    return { integers: result, count: count };
}

// Example usage:
const range = integersInRangeDescending(3, 8);
console.log(range.integers); // Output: [7, 6, 5, 4]
console.log(range.count);    // Output: 4
