// YOUR CODE GOES HERE

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

// Call the console.log function with your output value
// when you are ready.