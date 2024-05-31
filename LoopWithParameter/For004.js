// Given the price of 1 kg of sweets (as a real number), output the cost of 1, 2, ...,
// 10 kg of these sweets.

function calculateCostPerKg(pricePerKg) {
    let costArray = [];
    for (let i = 1; i <= 10; i++) {
        costArray.push(i * pricePerKg);
    }
    return costArray;
}

// Example usage:
const pricePerKg = 5; // Replace 5 with the actual price per kg
const costArray = calculateCostPerKg(pricePerKg);
console.log("Cost for 1 to 10 kg of sweets:");
costArray.forEach((cost, index) => {
    console.log(`${index + 1} kg: $${cost}`);
});
