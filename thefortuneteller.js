/*
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */
function tellFortune(
  numberOfChildren, 
  partnersName,
  geographicLocation,
  jobTitle)  {

  var fortune = " You will be a " 
            + jobTitle
            + " in "
            + geographicLocation
            + ", and married to "
            + partnersName
            + " with "
            + numberOfChildren
            + " kids.";
//console.log(fortune);
  addOutput(fortune);
}

tellFortune(100, "A", "B", "C");
tellFortune(200, "1", "2", "3");
tellFortune(300, "a", "b", "c");

// Call the addOutput function with your output value
// when you are ready.
// Example: addOutput(outputValue);
