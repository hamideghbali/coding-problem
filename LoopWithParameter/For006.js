// Given the price of 1 kg of sweets (as a real number), output the cost of 1.2,
// 1.4, ..., 2 kg of these sweets.

function calculateCostForRangeOfKg(pricePerKg) {
    let costArray = [];
    for (let i = 1.2; i <= 2; i += 0.2) {
        costArray.push(i * pricePerKg);
    }
    return costArray;
}

// Example usage:
const pricePerKg = 5; // Replace 5 with the actual price per kg
const costArray = calculateCostForRangeOfKg(pricePerKg);
console.log("Cost for 1.2 to 2 kg of sweets:");
costArray.forEach((cost, index) => {
    console.log(`${1.2 + index * 0.2} kg: $${cost.toFixed(2)}`);
});
