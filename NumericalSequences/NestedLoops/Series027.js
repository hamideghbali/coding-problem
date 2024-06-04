// An integer N and a sequence of N real numbers A1, A2, ..., AN are given.
// Output the following numbers:
// // A1, (A2)^2, ..., (AN−1)^N−1, (AN)^N
// .

function calculateSequence(N, sequence) {
    const poweredSequence = [];
    
    // Iterate through the sequence and calculate the power for each element
    for (let i = 0; i < N - 1; i++) {
        poweredSequence.push(Math.pow(sequence[i + 1], i + 1));
    }
    
    // Calculate the power of the last element
    poweredSequence.push(Math.pow(sequence[N - 1], N));

    return poweredSequence;
}

// Example usage
const N = 5;
const sequence = [1, 2, 3, 4, 5]; // Given sequence
const poweredSequence = calculateSequence(N, sequence);
console.log(poweredSequence);
