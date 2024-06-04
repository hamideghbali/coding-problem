
// Positive integers K, N and a sequence of N real numbers A1, A2, ..., AN are
// given. For each element of the sequence find its value raised to the power of K:
// (A1)^K
// , (A2)^K
// , ..., (AN)^K
// .

function powerOfK(K, sequence) {
    const poweredSequence = [];
    
    // Iterate through the sequence and calculate the power of K for each element
    for (let i = 0; i < sequence.length; i++) {
        poweredSequence.push(Math.pow(sequence[i], K));
    }
    
    return poweredSequence;
}

// Example usage
const K = 2;
const sequence = [1, 2, 3, 4, 5]; // Given sequence
const poweredSequence = powerOfK(K, sequence);
console.log("Sequence raised to the power of", K, ":", poweredSequence);
