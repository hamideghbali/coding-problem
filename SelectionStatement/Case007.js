// The units of weight are numbered as: 1 — kilogram, 2 — milligram, 3 —
// gram, 4 — ton, 5 — centner (= 100 kilograms). The order number N of a unit
// of weight and the mass M of a solid are given (N is an integer in the range 1
// to 5, M is a real number). Output the mass of the solid in kilograms.
function convertToKilograms(N, M) {
    let massInKilograms;

    // Convert the mass of the solid to kilograms based on the order number N
    switch (N) {
        case 1:
            massInKilograms = M; // Kilogram to kilogram
            break;
        case 2:
            massInKilograms = M * 0.000001; // Milligram to kilogram
            break;
        case 3:
            massInKilograms = M * 0.001; // Gram to kilogram
            break;
        case 4:
            massInKilograms = M * 1000; // Ton to kilogram
            break;
        case 5:
            massInKilograms = M * 100; // Centner to kilogram
            break;
        default:
            massInKilograms = "Invalid unit";
    }

    return massInKilograms;
}

// Example usage:
console.log(convertToKilograms(1, 5));  // Output: 5
console.log(convertToKilograms(3, 500));  // Output: 0.5
console.log(convertToKilograms(5, 30)); // Output: 3000
console.log(convertToKilograms(6, 10));  // Output: Invalid unit
