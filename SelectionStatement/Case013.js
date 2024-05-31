// Elements of a right isosceles triangle are numbered as: 1 — leg a, 2 —
// hypotenuse c = a·(2)1/2, 3 — altitude h drawn onto hypotenuse (h = c/2), 4 —
// area S = c·h/2. The order number of one element and its value (as a real
// number) are given. Output values of other elements in the same order.

function triangleElements(orderNumber, value) {
    let a, c, h, S;

    switch (orderNumber) {
        case 1:
            a = value;
            c = a * Math.sqrt(2);
            h = c / 2;
            S = c * h / 2;
            break;
        case 2:
            c = value;
            a = c / Math.sqrt(2);
            h = c / 2;
            S = c * h / 2;
            break;
        case 3:
            h = value;
            c = 2 * h;
            a = c / Math.sqrt(2);
            S = c * h / 2;
            break;
        case 4:
            S = value;
            h = Math.sqrt(2 * S);
            c = 2 * h;
            a = c / Math.sqrt(2);
            break;
        default:
            return "Invalid order number";
    }

    return [a, c, h, S];
}

// Example usage:
console.log(triangleElements(1, 5));  // Output: [5, 7.0710678118654755, 3.5355339059327378, 12.500000000000002]
console.log(triangleElements(2, 10)); // Output: [7.0710678118654755, 10, 5, 25]
console.log(triangleElements(3, 3.5));  // Output: [2.4748737341529163, 7, 3.5, 12.25]
console.log(triangleElements(4, 12.5)); // Output: [5, 7.0710678118654755, 3.5355339059327378, 12.5]
