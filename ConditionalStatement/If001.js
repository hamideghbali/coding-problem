// An integer is given. If the integer is positive then increase it by 1, otherwise do
// not change it. Output the obtained integer
// Function to increase the integer by 1 if it is positive
function processInteger(n) {
    if (n > 0) {
      n += 1;
    }
    return n;
  }
  
  // Example usage:
  const inputInteger = 5; // Example input integer
  const result = processInteger(inputInteger);
  console.log(`The obtained integer is: ${result}`);
  