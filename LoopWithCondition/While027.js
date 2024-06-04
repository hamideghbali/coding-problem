// Given an integer N (> 1) that is a Fibonacci number: N = FK, find its order
// number K (see the Fibonacci numbers definition in While24).


function findOrderNumber(N) {
    let F1 = 1;
    let F2 = 1;
    let FK = F1 + F2;
    let K = 2;

    while (FK < N) {
        F1 = F2;
        F2 = FK;
        FK = F1 + F2;
        K++;
    }

    if (FK === N) {
        return K;
    } else {
        return -1; // N is not a Fibonacci number
    }
}

// Example usage:
let N = 13; // Change N to any Fibonacci number greater than 1
let orderNumber = findOrderNumber(N);
console.log("Order number of", N + ":", orderNumber);
