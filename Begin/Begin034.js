// X kg of chocolates cost A euro and Y kg of sugar candies cost B euro
// (positive numbers X, A, Y, B are given). Find the cost of 1 kg of the chocolates
// and the cost of 1 kg of the sugar candies. Also determine how many times the
// chocolates are more expensive than the sugar candies.


// Function to calculate the cost of 1 kg of chocolates and sugar candies,
// and how many times chocolates are more expensive than sugar candies
function calculateCostAndComparison(X, A, Y, B) {
    // Calculate the cost per kg of chocolates
    const costPerKgChocolates = A / X;
    
    // Calculate the cost per kg of sugar candies
    const costPerKgSugarCandies = B / Y;
    
    // Determine how many times chocolates are more expensive than sugar candies
    const timesMoreExpensive = costPerKgChocolates / costPerKgSugarCandies;
    
    // Return the results
    return {
      costPerKgChocolates,
      costPerKgSugarCandies,
      timesMoreExpensive
    };
  }
  
  // Example usage:
  const X = 2; // You can change this value to any positive number of kg for chocolates
  const A = 10; // You can change this value to any positive number of euros for chocolates
  const Y = 3; // You can change this value to any positive number of kg for sugar candies
  const B = 15; // You can change this value to any positive number of euros for sugar candies
  const result = calculateCostAndComparison(X, A, Y, B);
  
  console.log(`Cost of 1 kg of chocolates: ${result.costPerKgChocolates.toFixed(2)} euros.`);
  console.log(`Cost of 1 kg of sugar candies: ${result.costPerKgSugarCandies.toFixed(2)} euros.`);
  console.log(`Chocolates are ${result.timesMoreExpensive.toFixed(2)} times more expensive than sugar candies.`);
  