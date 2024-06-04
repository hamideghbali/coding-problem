// Using the MonthDays function from the task Proc53, write a procedure
// NextDate(D, M, Y) that changes a correct date, represented at the ―day D,
// month number M, year Y‖ format, to a next one (D, M, Y are input and output
// integer parameters). Apply this procedure to three given dates and output
// resulting next ones.

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

function NextDate(D, M, Y) {
    if (D < 1 || D > MonthDays(M, Y) || M < 1 || M > 12 || Y <= 0) {
        throw new Error("Invalid input: Day, month, or year out of range.");
    }

    if (D === MonthDays(M, Y)) {
        if (M === 12) {
            D = 1;
            M = 1;
            Y++;
        } else {
            M++;
            D = 1;
        }
    } else {
        D++;
    }

    return { D, M, Y };
}

// Example usage
const dates = [
    { D: 5, M: 1, Y: 2022 }, // January 5, 2022
    { D: 28, M: 2, Y: 2023 }, // February 28, 2023
    { D: 30, M: 12, Y: 2024 } // December 30, 2024
];

dates.forEach(date => {
    const nextDate = NextDate(date.D, date.M, date.Y);
    console.log(`Next date of ${date.D}/${date.M}/${date.Y}: ${nextDate.D}/${nextDate.M}/${nextDate.Y}`);
});
