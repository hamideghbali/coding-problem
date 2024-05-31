// The units of length are numbered as: 1 — decimeter, 2 — kilometer, 3 —
// meter, 4 — millimeter, 5 — centimeter. The order number N of a unit of length
// and also the length L of a segment are given (N is an integer in the range 1
// to 5, L is a real number). Output the length of the segment in meters.

function convertToMeters(N, L) {
    let lengthInMeters;

    // Convert the length of the segment to meters based on the order number N
    switch (N) {
        case 1:
            lengthInMeters = L * 0.1; // Decimeter to meter
            break;
        case 2:
            lengthInMeters = L * 1000; // Kilometer to meter
            break;
        case 3:
            lengthInMeters = L; // Meter to meter
            break;
        case 4:
            lengthInMeters = L * 0.001; // Millimeter to meter
            break;
        case 5:
            lengthInMeters = L * 0.01; // Centimeter to meter
            break;
        default:
            lengthInMeters = "Invalid unit";
    }

    return lengthInMeters;
}

// Example usage:
console.log(convertToMeters(1, 5));  // Output: 0.5
console.log(convertToMeters(3, 500));  // Output: 500
console.log(convertToMeters(5, 30)); // Output: 0.3
console.log(convertToMeters(6, 10));  // Output: Invalid unit
