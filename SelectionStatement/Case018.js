// Given an integer in the range 100 to 999, output its alphabetic equivalent.
// For example, 100 — ―one hundred‖, 256 — ―two hundred and fifty-six‖,
// 814 — ―eight hundred and fourteen‖, 901 — ―nine hundred and one‖.

function numberToWords(num) {
    // Define arrays for numbers from 1 to 19 and tens from 20 to 90
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    // Extract the hundreds, tens, and units places
    const hundreds = Math.floor(num / 100);
    const tensAndUnits = num % 100;

    // Construct the alphabetic equivalent based on the hundreds, tens, and units
    let words = '';
    if (hundreds > 0) {
        words += numbers[hundreds] + ' hundred';
        if (tensAndUnits > 0) {
            words += ' and ';
        }
    }

    if (tensAndUnits === 0) {
        // No tens and units, just hundreds
        words += ' ';
    } else if (tensAndUnits < 20) {
        // Numbers less than 20
        words += numbers[tensAndUnits];
    } else {
        // Numbers greater than or equal to 20
        const tensPlace = Math.floor(tensAndUnits / 10);
        const unitsPlace = tensAndUnits % 10;
        words += tens[tensPlace];
        if (unitsPlace > 0) {
            words += '-' + numbers[unitsPlace];
        }
    }

    return words;
}

// Example usage:
console.log(numberToWords(100));  // Output: "one hundred"
console.log(numberToWords(256));  // Output: "two hundred and fifty-six"
console.log(numberToWords(814));  // Output: "eight hundred and fourteen"
console.log(numberToWords(901));  // Output: "nine hundred and one"
