// Given an integer N (> 1), find the smallest integer K such that the inequality3^K> N 
// is fulfilled.

function smallestKFor3KGreaterThanN(N) {
    let K = 1;
    let powerOfThree = 3;

    while (powerOfThree <= N) {
        K++;
        powerOfThree *= 3;
    }

    return K;
}

// Example usage:
let N = 20; // Change N to any positive integer
let smallestK = smallestKFor3KGreaterThanN(N);
console.log("Smallest K such that 3^K > N:", smallestK);
