// Write an integer function SumRange(A, B) that returns a sum of all integers
// in the range A to B inclusively (A and B are integers). In the case of A > B the
// function returns 0. Using this function, find a sum of all integers in the range A
// to B and in the range B to C provided that integers A, B, C are given.

function SumRange(A, B) {
    if (A > B) {
        return 0;
    }
    let sum = 0;
    for (let i = A; i <= B; i++) {
        sum += i;
    }
    return sum;
}

// Example usage
const A = 3;
const B = 7;
const C = 12;

const sumAB = SumRange(A, B);
const sumBC = SumRange(B, C);

console.log(`Sum of integers from ${A} to ${B}: ${sumAB}`);
console.log(`Sum of integers from ${B} to ${C}: ${sumBC}`);
