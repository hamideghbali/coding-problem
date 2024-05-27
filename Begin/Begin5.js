// Given the edge a of a cube, find the volume V = a^3 and the surface  area S = 6*a^2 of the cube.

// Function to calculate the volume and surface area of a cube
function calculateCubeProperties(edgeLength) {
    // Calculate the volume
    const volume = Math.pow(edgeLength, 3); // or edgeLength ** 3
    
    // Calculate the surface area
    const surfaceArea = 6 * Math.pow(edgeLength, 2); // or 6 * (edgeLength ** 2)
    
    // Return the volume and surface area as an object
    return { volume, surfaceArea };
  }
  
  // Example usage:
  const edge = 5; // You can change this value to any edge length
  const properties = calculateCubeProperties(edge);
  
  console.log(`The volume of a cube with edge length ${edge} is ${properties.volume}.`);
  console.log(`The surface area of a cube with edge length ${edge} is ${properties.surfaceArea}.`);
  