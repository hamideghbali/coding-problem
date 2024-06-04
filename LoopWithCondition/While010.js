// Given an integer N (> 1), find the largest integer K such that the inequality
// 3^K< N is fulfilled.

function largestKFor3KLessThanN(N) {
    let K = 0;
    let powerOfThree = 1;

    while (powerOfThree < N) {
        K++;
        powerOfThree *= 3;
    }

    return K - 1; // Decrement K by 1 to find the largest K such that 3^K < N
}

// Example usage:
let N = 20; // Change N to any positive integer
let largestK = largestKFor3KLessThanN(N);
console.log("Largest K such that 3^K < N:", largestK);
