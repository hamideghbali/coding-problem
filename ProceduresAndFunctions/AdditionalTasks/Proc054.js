// Using the MonthDays function from the task Proc53, write a procedure
// PrevDate(D, M, Y) that changes a correct date, represented at the ―day D,
// month number M, year Y‖ format, to a previous one (D, M, Y are input and
// output integer parameters). Apply this procedure to three given dates and
// output resulting previous ones.

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

function PrevDate(D, M, Y) {
    if (D < 1 || D > MonthDays(M, Y) || M < 1 || M > 12 || Y <= 0) {
        throw new Error("Invalid input: Day, month, or year out of range.");
    }

    if (D === 1) {
        if (M === 1) {
            D = 31;
            M = 12;
            Y--;
        } else {
            M--;
            D = MonthDays(M, Y);
        }
    } else {
        D--;
    }

    return { D, M, Y };
}

// Example usage
const dates = [
    { D: 5, M: 1, Y: 2022 }, // January 5, 2022
    { D: 1, M: 3, Y: 2023 }, // March 1, 2023
    { D: 30, M: 12, Y: 2024 } // December 30, 2024
];

dates.forEach(date => {
    const prevDate = PrevDate(date.D, date.M, date.Y);
    console.log(`Previous date of ${date.D}/${date.M}/${date.Y}: ${prevDate.D}/${prevDate.M}/${prevDate.Y}`);
});
