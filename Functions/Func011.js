// Write a logical function IsPower5(K) that returns True, if an positive integer
// parameter K is equal to 5 raised to some integer power, and False otherwise.
// Using this function, find the amount of powers of base 5 in a given sequence
// of 10 positive integers.

function IsPower5(K) {
    if (K === 1) {
        return true; // 5^0 = 1
    }
    let power = 1;
    while (power < K) {
        power *= 5;
        if (power === K) {
            return true;
        }
    }
    return false;
}

// Example usage
const sequence = [1, 5, 25, 8, 125, 20, 500, 3, 15, 625];
let power5Count = 0;

for (let i = 0; i < sequence.length; i++) {
    if (IsPower5(sequence[i])) {
        power5Count++;
    }
}

console.log(`Amount of powers of base 5 in the sequence: ${power5Count}`);
