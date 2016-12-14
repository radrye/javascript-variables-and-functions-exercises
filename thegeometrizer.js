// TIPS:
// - The formula for the circumference of a circle is 2*pi*radius
// - The formula for the area of a circle is 2*pi*radius*radius
// - The value of pi is available as a constant Math.PI
//   e.g. console.log(Math.PI) should output 3.141592653589793
// YOUR CODE GOES HERE

// Call the console.log function with your output value
// when you are ready.
/*
  Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radius = 48;
var circumferenceCircle = 2 * Math.PI * radius;
var areaCircle = 2 * Math.PI * radius * radius;

var circAnswer = "The circumference is " + circumferenceCircle + ".";
var areaAnswer = "The area is " + areaCircle + ".";


console.log(circAnswer);
console.log(areaAnswer);