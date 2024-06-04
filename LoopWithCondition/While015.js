// A principal of 1000 euro is invested at a rate of P percent compounded
// annually. A real number P is given, 0 < P < 25. Find, how many years K it will
// take for an investment to exceed 1100 euro. Output K (as an integer) and the
// compound amount S of the principal at the end of K years (as a real number).

function findYearsToExceed(principal, rate, targetAmount) {
    let compoundAmount = principal;
    let years = 0;

    while (compoundAmount < targetAmount) {
        compoundAmount *= (1 + rate / 100);
        years++;
    }

    return [years, compoundAmount];
}

// Example usage:
let principal = 1000; // Initial investment
let rate = 5; // Annual interest rate (in percent)
let targetAmount = 1100; // Amount to exceed
let [years, compoundAmount] = findYearsToExceed(principal, rate, targetAmount);
console.log("Years to exceed 1100 euro:", years);
console.log("Compound amount at the end of K years:", compoundAmount.toFixed(2));
