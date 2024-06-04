// Write a logical function IsPowerN(K, N) that returns True, if an positive
// integer parameter K is equal to N (> 1) raised to some integer power, and False
// otherwise. Having input an integer N (> 1) and a sequence of 10 positive
// integers and using this function, find the amount of powers of base N in the
// given sequence.

function IsPowerN(K, N) {
    if (K === 1) {
        return true; // N^0 = 1
    }
    let power = 1;
    while (power < K) {
        power *= N;
        if (power === K) {
            return true;
        }
    }
    return false;
}

// Example usage
const baseN = 3; // Base N
const sequence = [1, 3, 9, 4, 27, 5, 6, 7, 8, 81];
let powerNCount = 0;

for (let i = 0; i < sequence.length; i++) {
    if (IsPowerN(sequence[i], baseN)) {
        powerNCount++;
    }
}

console.log(`Amount of powers of base ${baseN} in the sequence: ${powerNCount}`);
