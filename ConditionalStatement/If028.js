// Given a number of year (as a positive integer), find the amount of days in the
// year. Note that the length of year is 365 days for an ordinary year and 366 days
// for a leap year. A leap year is every year whose number is divisible by 4,
// as 1980, except centenary years that are not divisible by 400 (for example,
// 1300 and 1900 are ordinary years, 1200 and 2000 are leap years).

function daysInYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year: divisible by 4 but not by 100, or divisible by 400
    } else {
        return 365; // Ordinary year
    }
}

// Example usage:
console.log(daysInYear(2021)); // Output: 365 (ordinary year)
console.log(daysInYear(2020)); // Output: 366 (leap year)
console.log(daysInYear(1900)); // Output: 365 (ordinary year)
console.log(daysInYear(2000)); // Output: 366 (leap year)
