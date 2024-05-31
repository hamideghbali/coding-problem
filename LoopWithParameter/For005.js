// Given the price of 1 kg of sweets (as a real number), output the cost of 0.1,
// 0.2, ..., 1 kg of these sweets.

function calculateCostPerFractionOfKg(pricePerKg) {
    let costArray = [];
    for (let i = 0.1; i <= 1; i += 0.1) {
        costArray.push(i * pricePerKg);
    }
    return costArray;
}

// Example usage:
const pricePerKg = 5; // Replace 5 with the actual price per kg
const costArray = calculateCostPerFractionOfKg(pricePerKg);
console.log("Cost for 0.1 to 1 kg of sweets:");
costArray.forEach((cost, index) => {
    console.log(`${(index + 1) * 0.1} kg: $${cost.toFixed(2)}`);
});
