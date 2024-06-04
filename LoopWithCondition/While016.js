// The skier began trainings having run 10 km. Each next day he increased the
// run distance by P percent from the distance of the last day. A real number P is
// given, 0 < P < 50). Find, how many days K it will take for a total run to exceed
// 200 km. Output K (as an integer) and the total run S (as a real number).

function findDaysToExceed(targetDistance, increasePercent) {
    let currentDistance = 10; // Initial run distance
    let days = 0;

    while (currentDistance < targetDistance) {
        currentDistance *= (1 + increasePercent / 100);
        days++;
    }

    return [days, currentDistance];
}

// Example usage:
let targetDistance = 200; // Target distance to exceed (in km)
let increasePercent = 5; // Percentage increase in distance each day
let [days, totalRun] = findDaysToExceed(targetDistance, increasePercent);
console.log("Days to exceed 200 km:", days);
console.log("Total run distance at the end of K days:", totalRun.toFixed(2), "km");
