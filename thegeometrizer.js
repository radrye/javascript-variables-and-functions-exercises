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


/*
[X] Create a function called calcCircumfrence:

[X] Pass the radius to the function.
[X] Calculate the circumference based on the radius, and output "The circumference is NN".
[X] Create a function called calcArea:

[X] Pass the radius to the function.
[X] Calculate the area based on the radius, and output "The area is NN".*/

function calcCircumference(radius) {
	var circumference = 2 * Math.PI * radius;
	var output = "The circumference is " + circumference + ".";
	console.log(output);
}

function calcArea(radius) {
	var area = 2 * Math.PI * radius * radius;
	var output = "The area is " + area + ".";
	console.log(output);
}


calcCircumference(5);
calcArea(5);
