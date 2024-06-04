// An integer N (> 0) is given. If it equals 3 raised to some integer power then
// output True, otherwise output False.

function isPowerOfThree(N) {
    while (N > 1) {
        if (N % 3 !== 0) {
            return false; // N is not equal to 3 raised to some integer power
        }
        N /= 3;
    }
    return N === 1; // N is equal to 3 raised to some integer power
}

// Example usage:
let N = 81; // Change N to any positive integer
let result = isPowerOfThree(N);
console.log(result);
