/*
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in. */

// this gets call-ED by the call-ER and has
// to do with whatever it's supposed to do..
// i.e., whatever functionality was promised
function calculateAge(birthYear, currentYear) {
  var possibleAge1 = currentYear - birthYear;
  var possibleAge2 = possibleAge1 - 1;

  var output = "I will be either "
                + possibleAge1
                + " or "
                + possibleAge2
                + " in "
                + currentYear;

  addOutput(output);
}
// this is fulfilled by the function
// call-ER
calculateAge(1985, 2016);
calculateAge(1985, 2017);
calculateAge(1985, 2018);
