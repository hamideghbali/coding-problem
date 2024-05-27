// The edges a, b, c of a right parallelepiped are given. Find the volume V = a*b*c and the surface area S = 2*(a*b + b*c + a*c) of the right parallelepiped.

// Function to calculate the volume and surface area of a right parallelepiped
function calculateParallelepipedProperties(edgeA, edgeB, edgeC) {
    // Calculate the volume
    const volume = edgeA * edgeB * edgeC;
    
    // Calculate the surface area
    const surfaceArea = 2 * (edgeA * edgeB + edgeB * edgeC + edgeA * edgeC);
    
    // Return the volume and surface area as an object
    return { volume, surfaceArea };
  }
  
  // Example usage:
  const edgeA = 5; // You can change this value to any edge length
  const edgeB = 10; // You can change this value to any edge length
  const edgeC = 15; // You can change this value to any edge length
  const properties = calculateParallelepipedProperties(edgeA, edgeB, edgeC);
  
  console.log(`The volume of a right parallelepiped with edges ${edgeA}, ${edgeB}, and ${edgeC} is ${properties.volume}.`);
  console.log(`The surface area of a right parallelepiped with edges ${edgeA}, ${edgeB}, and ${edgeC} is ${properties.surfaceArea}.`);
  