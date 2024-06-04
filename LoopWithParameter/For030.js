// An integer N (> 1) and two points A, B (A < B) on the real axis are given. The
// segment [A, B] is divided into N sub-segments of equal length. Output the
// length H of each sub-segment and then output the values of a function
// F(X) = 1 − sin(X) at points dividing the segment [A, B]:
// F(A), F(A + H), F(A + 2·H), ..., F(B).

function partitionAndEvaluateFunction(A, B, N) {
    if (N <= 1) {
        console.log("N must be greater than 1");
        return;
    }

    let H = (B - A) / N; // Calculate the length of each sub-segment
    let values = []; // Array to store the function values at each point

    for (let i = 0; i <= N; i++) {
        let X = A + i * H; // Calculate the current point
        let F_X = 1 - Math.sin(X); // Calculate the function value at the current point
        values.push(F_X); // Store the function value
    }

    // Output the results
    console.log("Length of each sub-segment (H):", H);
    console.log("Function values at the points dividing the segment:");
    console.log(values.join(", "));
}

// Example usage:
let A = 0; // Change A to any real number
let B = Math.PI; // Change B to any real number greater than A
let N = 5; // Change N to any integer
