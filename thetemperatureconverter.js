// TIPS:
// - The formula to convert Celsius to Fahrenheit is:
//   (celsius * (9/5)) + 32
// - The formula to convert Fahrenheit to Celsius is:
//   (fahrenheit - 32) * (5/9)
// YOUR CODE GOES HERE

// Call console.log function with your output value
// when you are ready.
/*
	It's hot out! Let's make a converter based on the steps here.

	Store a celsius temperature into a variable.
	Convert it to fahrenheit and output "NN°C is NN°F".
	Now store a fahrenheit temperature into a variable.
	Convert it to celsius and output "NN°F is NN°C."
*/

/*
[X] Create a function called celsiusToFahrenheit:
[X] Pass a celsius temperature to the function.
[X] Convert it to fahrenheit and output "NN°C is NN°F".

[X] Create a function called fahrenheitToCelsius
[X] Pass a fahrenheit temperature to the function.
[X] Convert it to celsius and output "NN°F is NN°C."
*/
function celsiusToFahrenheit(celsiusTemp) {
	var convertFarenheit = celsiusTemp * (9/5) + 32;
	var answer = convertFarenheit + "°F is " + celsiusTemp + "°C.";
	console.log(answer);
}

function fahrenheitToCelsius(fahrenheitTemp) {
  var convertCelsius = (fahrenheitTemp - 32) * (5/9);
  var answer = convertCelsius + "°C is " + fahrenheitTemp + " °F.";
  console.log(answer);
}
celsiusToFahrenheit(20);
fahrenheitToCelsius(80);

