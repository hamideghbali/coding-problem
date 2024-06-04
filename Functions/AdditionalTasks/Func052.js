// Write a logical function IsLeapYear(Y) that returns True if a year Y (a
//     positive integer parameter) is a leap year, and False otherwise. Output the
//     return values of this function for five given values of the parameter Y. Note
//     that a year is a leap year if it is divisible by 4 except for years that are divisible
//     by 100 and are not divisible by 400.

function IsLeapYear(Y) {
    if ((Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage
function main() {
    let years = [2000, 2004, 1900, 2020, 2100];
    for (let year of years) {
        console.log(`Is ${year} a leap year? ${IsLeapYear(year)}`);
    }
}

main();
