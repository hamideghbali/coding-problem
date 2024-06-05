// An integer N and a sequence of N pairs of real numbers (m, v) are given.
// Each pair of given numbers contains the weight m and the volume v of a detail
// that is made of some homogeneous material. Output the order number of a
// detail that is made of the material with maximal density. Also output the
// corresponding density. Note that the density P can be found by formula

// P = m/v.

function findMaxDensityDetail(N, sequence) {
    let maxDensity = 0;
    let maxDensityOrderNumber = 0;

    for (let i = 0; i < N; i++) {
        const [m, v] = sequence[i];
        const density = m / v;
        
        if (density > maxDensity) {
            maxDensity = density;
            maxDensityOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
        }
    }

    return { orderNumber: maxDensityOrderNumber, density: maxDensity };
}

// Example usage:
const N = 5; // Example value of N
const sequence = [
    [10, 2], // Example pair of real numbers
    [8, 4],
    [5, 1],
    [6, 3],
    [12, 6]
];

const { orderNumber, density } = findMaxDensityDetail(N, sequence);
console.log("Order number of detail with maximal density:", orderNumber);
console.log("Maximal density:", density);
