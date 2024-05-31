// Elements of a circle are numbered as: 1 — radius R, 2 — diameter D = 2·R,
// 3 — length L = 2·π·R of the circumference, 4 — area S = π·R
// 2
// . The order
// number of one element and its value (as a real number) are given. Output
// values of other elements in the same order. Use 3.14 for a value of π.

function circleElements(orderNumber, value) {
    const pi = 3.14;
    let R, D, L, S;

    switch (orderNumber) {
        case 1:
            R = value;
            D = 2 * R;
            L = 2 * pi * R;
            S = pi * R * R;
            break;
        case 2:
            D = value;
            R = D / 2;
            L = 2 * pi * R;
            S = pi * R * R;
            break;
        case 3:
            L = value;
            R = L / (2 * pi);
            D = 2 * R;
            S = pi * R * R;
            break;
        case 4:
            S = value;
            R = Math.sqrt(S / pi);
            D = 2 * R;
            L = 2 * pi * R;
            break;
        default:
            return "Invalid order number";
    }

    return [R, D, L, S];
}

// Example usage:
console.log(circleElements(1, 5));  // Output: [5, 10, 31.400000000000002, 78.5]
console.log(circleElements(2, 10)); // Output: [5, 10, 31.400000000000002, 78.5]
console.log(circleElements(3, 31.4));  // Output: [5, 10, 31.4, 78.53999999999999]
console.log(circleElements(4, 78.5)); // Output: [5, 10, 31.400000000000002, 78.5]
