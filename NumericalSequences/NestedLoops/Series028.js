// An integer N and a sequence of N real numbers A1, A2, ..., AN are given.
// Output the following numbers:
// (A1)^N, (A2)^N−1, ..., (AN−1)^2
// , AN.
function calculatePowerSequence(N, sequence) {
    const poweredSequence = [];

    // Iterate through the sequence and calculate the power for each element
    for (let i = 0; i < N - 1; i++) {
        poweredSequence.push(Math.pow(sequence[i], N - i));
    }

    // Add the last element of the sequence (AN)
    poweredSequence.push(sequence[N - 1]);

    return poweredSequence;
}

// Example usage
const N = 5;
const sequence = [1, 2, 3, 4, 5]; // Given sequence
const poweredSequence = calculatePowerSequence(N, sequence);
console.log(poweredSequence);
