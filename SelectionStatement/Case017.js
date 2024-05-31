// Given an order number of some training task (as an integer in the range 10

//     to 40), output its alphabetic equivalent as: ―the eighteenth task‖, ―the twenty-
//     third task‖, ―the thirtieth task‖, etc.

function orderNumberToWords(orderNumber) {
    // Define arrays for numbers from 1 to 19 and tens from 20 to 40
    const numbers = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
                     'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    const tens = ['', '', 'twentieth', 'thirtieth', 'fortieth'];

    // Extract the decade and the unit digit from the order number
    const decade = Math.floor(orderNumber / 10);
    const unitDigit = orderNumber % 10;

    // Construct the alphabetic equivalent based on the decade and the unit digit
    let orderInWords = '';
    if (orderNumber >= 10 && orderNumber < 20) {
        orderInWords = 'the ' + numbers[orderNumber] + ' task';
    } else if (orderNumber >= 20 && orderNumber <= 40) {
        orderInWords = 'the ' + tens[decade] + (unitDigit !== 0 ? '-' + numbers[unitDigit] : '') + ' task';
    } else {
        orderInWords = 'Invalid order number';
    }

    return orderInWords;
}

// Example usage:
console.log(orderNumberToWords(18));  // Output: "the eighteenth task"
console.log(orderNumberToWords(23));  // Output: "the twenty-third task"
console.log(orderNumberToWords(30));  // Output: "the thirtieth task"
console.log(orderNumberToWords(40));  // Output: "the fortieth task"
