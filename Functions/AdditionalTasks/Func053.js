// Using the IsLeapYear function from the task Func52, write an integer
// function MonthDays(M, Y) that returns the amount of days for M-th month of
// year Y (M and Y are integers, 1 ≤ M ≤ 12, Y > 0). Output the return value of
// // this function for a given year Y and each of given months M1, M2, M3.

function IsLeapYear(Y) {
    if ((Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function MonthDays(M, Y) {
    switch (M) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return IsLeapYear(Y) ? 29 : 28;
        default:
            return -1; // Invalid month
    }
}

// Example usage
function main() {
    let year = 2024; // Example year
    let months = [2, 4, 7]; // Example months
    for (let month of months) {
        console.log(`Number of days in month ${month} of year ${year}: ${MonthDays(month, year)}`);
    }
}

main();
