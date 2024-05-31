// Given three real numbers, output the minimal value and then the maximal value.

function findMinMax(a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    return [min, max];
}

// Example usage:
let result1 = findMinMax(5.7, 3.2, 8.1);
console.log(`Minimal value: ${result1[0]}, Maximal value: ${result1[1]}`);  // Output: Minimal value: 3.2, Maximal value: 8.1

let result2 = findMinMax(-2.4, -3.6, -1.1);
console.log(`Minimal value: ${result2[0]}, Maximal value: ${result2[1]}`); // Output: Minimal value: -3.6, Maximal value: -1.1

let result3 = findMinMax(0, 0, 0);
console.log(`Minimal value: ${result3[0]}, Maximal value: ${result3[1]}`);  // Output: Minimal value: 0, Maximal value: 0

let result4 = findMinMax(7, 7, 7);
console.log(`Minimal value: ${result4[0]}, Maximal value: ${result4[1]}`);  // Output: Minimal value: 7, Maximal value: 7

let result5 = findMinMax(-5, 5, 0);
console.log(`Minimal value: ${result5[0]}, Maximal value: ${result5[1]}`);  // Output: Minimal value: -5, Maximal value: 5
