// YOUR CODE GOES HERE
/*
var currentAge = 32;
var maxAge = 103;
var amountPerDay = 3;

var totalSnacks = (maxAge - currentAge) * (amountPerDay * 365);

var lifetimeSupply = "You will need "
                   + totalSnacks
                   + " to last you until the ripe old age of "
                   + maxAge
                   + "."

console.log(lifetimeSupply);                
*/













/*
  Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

	Write a function named calculateSupply that:
	[X] - takes 2 arguments: age, amount per day.
	[X] - calculates the amount consumed for rest of the life (based on a constant max age).
	[X] - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
	[X] - Call that function three times, passing in different values each time.
	Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

var MAX_AGE = 39;
var DAYS_PER_YEAR = 365;

function yearsToDays(years) {
  return years * DAYS_PER_YEAR;
}

function calculateSupply(age, amountPerDay) {
  
  var yearsRemaining = MAX_AGE - age;
  var daysRemaining = yearsToDays(yearsRemaining);
  var amountReq = amountPerDay * daysRemaining;

  var calculateSupply = "You will need "
                   + amountReq
                   + " to last you until the ripe old age of "
                   + MAX_AGE
                   + "."

  console.log(calculateSupply)
}



calculateSupply(27, 3);
calculateSupply(17, 6);
calculateSupply(7, 7);


// Call the console.log function with your output value
// when you are ready.