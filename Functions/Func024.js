// Write a function Mean(X, Y) that computes the arithmetical mean (X+Y)/2
// and the geometrical mean (X·Y)

// 1/2 of two positive real numbers X and Y and
// returns the result as two real numbers (X and Y are input parameters). Using
// this function, find the arithmetical mean and the geometrical mean of pairs
// (A, B), (A, C), (A, D) provided that real numbers A, B, C, D are given.

function Mean(X, Y) {
    const arithmeticMean = (X + Y) / 2;
    const geometricMean = Math.sqrt(X * Y);
    return [arithmeticMean, geometricMean];
}

// Example usage
const pairs = [
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9]
];

for (let i = 0; i < pairs.length; i++) {
    const [arithmeticMean, geometricMean] = Mean(pairs[i][0], pairs[i][1]);
    console.log(`For pair (${pairs[i][0]}, ${pairs[i][1]}): Arithmetical mean: ${arithmeticMean}, Geometrical mean: ${geometricMean}`);
}
