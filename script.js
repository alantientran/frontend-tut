// script.js

// Function to change the text when button is clicked
function multiplyByThree() {
  const inputVal = document.getElementById("assignments").value;
  if (!isNaN(inputVal)) {
    alert("I cried " + inputVal * 3 + " times.");
  } else {
    alert("Please enter a valid number.");
  }
}
