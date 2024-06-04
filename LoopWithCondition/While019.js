// An integer N (> 0) is given. Output an integer obtained from the given one
// by reading it from right to left. Use the operators of integer division and taking
// the remainder after integer division.

function reverseInteger(N) {
    let reversed = 0;

    while (N > 0) {
        let digit = N % 10;
        reversed = reversed * 10 + digit;
        N = Math.floor(N / 10);
    }

    return reversed;
}

// Example usage:
let N = 12345; // Change N to any positive integer
let reversed = reverseInteger(N);
console.log("Reversed integer:", reversed);
