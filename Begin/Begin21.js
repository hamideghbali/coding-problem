// The coordinates (x1, y1), (x2, y2), (x3, y3) of the triangle vertices are given. Find the perimeter and the area of the triangle using the formula for distance between two points in the plane (see Begin20). The area of a triangle with sides a, b, c can be found by Heron’s formula:
// S = (p·(p − a)·(p − b)·(p − c))^1/2
// where p = (a + b + c)/2 is the half-perimeter.

// Function to calculate the area of a triangle using Heron's formula
function calculateTriangleArea(a, b, c) {
    // Calculate the half-perimeter
    const p = (a + b + c) / 2;
    
    // Calculate the area using Heron's formula
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
    // Return the area
    return area;
  }
  
  // Example usage:
  const a = 3; // You can change this value to the length of side a
  const b = 4; // You can change this value to the length of side b
  const c = 5; // You can change this value to the length of side c
  const area = calculateTriangleArea(a, b, c);
  
  console.log(`The area of the triangle with sides ${a}, ${b}, and ${c} is ${area}.`);
  