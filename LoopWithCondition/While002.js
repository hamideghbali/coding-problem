// Two positive real numbers A and B (A > B) are given. A segment of length A
// contains the greatest possible amount of segments of length B (without
// overlaps). Not using multiplication and division, find the amount of
// segments B, which are placed on the segment A.

function findNumberOfSegments(A, B) {
    let segmentsCount = 0;

    while (A >= B) {
        A -= B;
        segmentsCount++;
    }

    return segmentsCount;
}

// Example usage:
let A = 10; // Change A to any positive real number
let B = 3; // Change B to any positive real number less than A
let numberOfSegments = findNumberOfSegments(A, B);
console.log("Number of segments of length B:", numberOfSegments);
