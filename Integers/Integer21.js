// From the beginning of the day N seconds have passed (N is integer). Find
// an amount of seconds passed from the beginning of the last minute.

// Function to find the amount of seconds passed from the beginning of the last minute
function secondsPassedFromLastMinute(N) {
    // Use the remainder operator to find the seconds passed from the beginning of the last minute
    const seconds = N % 60;
    
    // Return the result
    return seconds;
  }
  
  // Example usage:
  const N = 123; // Number of seconds
  const secondsPassed = secondsPassedFromLastMinute(N);
  
  console.log(`The amount of seconds passed from the beginning of the last minute is ${secondsPassed}.`);
  