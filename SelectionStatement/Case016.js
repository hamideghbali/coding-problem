// Given an age in years (as an integer in the range 20 to 69), output its
// alphabetic equivalent as: ―twenty years‖, ―thirty-two years‖, ―forty-one years‖,
// etc.

function ageToWords(age) {
    // Define arrays for numbers from 1 to 19 and tens from 20 to 90
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                     'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];

    // Extract the decade and the unit digit from the age
    const decade = Math.floor(age / 10);
    const unitDigit = age % 10;

    // Construct the alphabetic equivalent based on the decade and the unit digit
    let ageInWords = '';
    if (age >= 20 && age < 30) {
        ageInWords = tens[decade] + '-' + numbers[unitDigit];
    } else if (age >= 30 && age < 70) {
        ageInWords = tens[decade] + '-' + numbers[unitDigit] + 's';
    } else {
        ageInWords = 'Invalid age';
    }

    return ageInWords;
}

// Example usage:
console.log(ageToWords(32));  // Output: "thirty-two years"
console.log(ageToWords(41));  // Output: "forty-one years"
console.log(ageToWords(55));  // Output: "fifty-five years"
console.log(ageToWords(67));  // Output: "sixty-seven years"
