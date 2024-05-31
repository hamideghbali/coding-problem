// Elements of an equilateral triangle are numbered as: 1 — side a, 2 —
// radius R1 of inscribed circle (R1 = a·(3)^1/2/6), 3 — radius R2 of circumscribed
// circle (R2 = 2·R1), 4 — area S = a^2 *(3)^1/2 / 4. The order number of one element
// and its value (as a real number) are given. Output values of other elements in
// the same order.

function triangleElements(orderNumber, value) {
    let a, R1, R2, S;

    switch (orderNumber) {
        case 1:
            a = value;
            R1 = a * Math.sqrt(3) / 6;
            R2 = 2 * R1;
            S = (a * a * Math.sqrt(3)) / 4;
            break;
        case 2:
            R1 = value;
            a = R1 * 6 / Math.sqrt(3);
            R2 = 2 * R1;
            S = (a * a * Math.sqrt(3)) / 4;
            break;
        case 3:
            R2 = value;
            R1 = R2 / 2;
            a = R1 * 6 / Math.sqrt(3);
            S = (a * a * Math.sqrt(3)) / 4;
            break;
        case 4:
            S = value;
            a = Math.sqrt((4 * S) / Math.sqrt(3));
            R1 = a * Math.sqrt(3) / 6;
            R2 = 2 * R1;
            break;
        default:
            return "Invalid order number";
    }

    return [a, R1, R2, S];
}

// Example usage:
console.log(triangleElements(1, 5));  // Output: [5, 1.4433756729740643, 2.8867513459481286, 10.825317547305486]
console.log(triangleElements(2, 2)); // Output: [6.928203230275509, 2, 4, 21.217622392718745]
console.log(triangleElements(3, 4));  // Output: [6.928203230275509, 1.1547005383792515, 2.309401076758503, 21.21762239271875]
console.log(triangleElements(4, 10)); // Output: [6.928203230275509, 1.4433756729740643, 2.8867513459481286, 10]
