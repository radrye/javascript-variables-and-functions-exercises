function setOutput(value) {
  var output = document.getElementById("output");

  if (output) {
  	output.innerText = value;
  } else {
  	alert("element with id \"output\" not found!");
  }
}