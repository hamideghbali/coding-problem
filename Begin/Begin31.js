// A Fahrenheit temperature T is given. Convert it into a centigrade
// temperature. The centigrade temperature TC and the Fahrenheit temperature TF
// are connected as:
// TC = (TF − 32)·5/9.

// Function to convert a temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(TF) {
    // Convert Fahrenheit to Celsius using the conversion factor (5/9)
    const TC = (TF - 32) * (5 / 9);
    
    // Return the value in Celsius
    return TC;
  }
  
  // Example usage:
  const TF = 98.6; // You can change this value to any temperature in Fahrenheit
  const TC = fahrenheitToCelsius(TF);
  
  console.log(`For T_F = ${TF}°F, the value in Celsius is ${TC.toFixed(2)}°C.`);
  