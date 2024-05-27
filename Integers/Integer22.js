// From the beginning of the day N seconds have passed (N is integer). Find
// an amount of seconds passed from the beginning of the last hour.

// Function to find the amount of seconds passed from the beginning of the last hour
function secondsPassedFromLastHour(N) {
    // Find the total seconds passed from the beginning of the day
    const totalSecondsPassed = N;
  
    // Find the seconds passed in the current hour
    const secondsInCurrentHour = totalSecondsPassed % 3600;
  
    // Subtract the seconds in the current hour from the total seconds passed
    const secondsPassedFromLastHour = totalSecondsPassed - secondsInCurrentHour;
  
    // Return the result
    return secondsPassedFromLastHour;
  }
  
  // Example usage:
  const N = 4500; // Number of seconds
  const secondsPassed = secondsPassedFromLastHour(N);
  
  console.log(`The amount of seconds passed from the beginning of the last hour is ${secondsPassed}.`);
  