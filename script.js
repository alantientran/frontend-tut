// script.js

// Alert message when the page loads
window.onload = function() {
  alert("Welcome to my first web page!");
};

// Function to change the text when button is clicked
function changeText() {
  document.getElementById("myParagraph").innerText = "You clicked the button!";
}
