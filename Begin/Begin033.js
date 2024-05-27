// X kg of sweet cost A euro. Find the cost of 1 kg and Y kg of the sweets
// (positive numbers X, A, Y are given).

// Function to calculate the cost of 1 kg and Y kg of sweets
function calculateCost(X, A, Y) {
    // Calculate the cost per kg
    const costPerKg = A / X;
    
    // Calculate the total cost of Y kg
    const totalCostYKg = costPerKg * Y;
    
    // Return the cost per kg and the total cost of Y kg
    return { costPerKg, totalCostYKg };
  }
  
  // Example usage:
  const X = 5; // You can change this value to any positive number of kg
  const A = 20; // You can change this value to any positive number of euros
  const Y = 3; // You can change this value to any positive number of kg
  const result = calculateCost(X, A, Y);
  
  console.log(`Cost of 1 kg of sweets: ${result.costPerKg.toFixed(2)} euros.`);
  console.log(`Total cost of ${Y} kg of sweets: ${result.totalCostYKg.toFixed(2)} euros.`);
  