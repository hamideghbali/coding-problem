// Two positive real numbers A and B (A > B) are given. A segment of length A
// contains the greatest possible amount of segments of length B (without
// overlaps). Not using multiplication and division, find the length of unused part
// of the segment A.

function findUnusedLength(A, B) {
    let unusedLength = A;

    while (unusedLength >= B) {
        unusedLength -= B;
    }

    return unusedLength;
}

// Example usage:
let A = 10; // Change A to any positive real number
let B = 3; // Change B to any positive real number less than A
let unusedLength = findUnusedLength(A, B);
console.log("Length of unused part of segment A:", unusedLength);
