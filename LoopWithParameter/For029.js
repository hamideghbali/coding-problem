// An integer N (> 1) and two points A, B (A < B) on the real axis are given. The
// segment [A, B] is divided into N sub-segments of equal length. Output the
// length H of each sub-segment and then output the sequence of points
// A, A + H, A + 2·H, A + 3·H, ..., B,

// which forms a partition of the segment [A, B].

function partitionSegment(A, B, N) {
    if (N <= 1) {
        console.log("N must be greater than 1");
        return;
    }

    let H = (B - A) / N; // Calculate the length of each sub-segment
    let points = []; // Array to store the points

    for (let i = 0; i <= N; i++) {
        points.push(A + i * H); // Calculate and store each point
    }

    // Output the results
    console.log("Length of each sub-segment (H):", H);
    console.log("Sequence of points:");
    console.log(points.join(", "));
}

// Example usage:
let A = 0; // Change A to any real number
let B = 10; // Change B to any real number greater than A
let N = 5; // Change N to any integer greater than 1
partitionSegment(A, B, N);
