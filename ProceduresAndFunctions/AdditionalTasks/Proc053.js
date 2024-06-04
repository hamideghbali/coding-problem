// Using the IsLeapYear function from the task Proc52, write an integer
// function MonthDays(M, Y) that returns the amount of days for M-th month of
// year Y (M and Y are integers, 1 ≤ M ≤ 12, Y > 0). Output the return value of
// this function for a given year Y and each of given months M1, M2, M3.

function IsLeapYear(Y) {
    if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function MonthDays(M, Y) {
    if (M < 1 || M > 12 || Y <= 0) {
        throw new Error("Invalid input: Month must be between 1 and 12, and year must be positive.");
    }

    const daysInMonth = [31, IsLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[M - 1];
}

// Example usage
const Y = 2024;
const M1 = 2; // February
const M2 = 4; // April
const M3 = 9; // September

console.log(`Days in February ${Y}: ${MonthDays(M1, Y)}`);
console.log(`Days in April ${Y}: ${MonthDays(M2, Y)}`);
console.log(`Days in September ${Y}: ${MonthDays(M3, Y)}`);
