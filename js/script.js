/* let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} */

// Get a reference to the button element
const button = document.getElementById('fixedButton');

// Function to show the button when the user scrolls past a certain point
function toggleButton() {
  if (window.scrollY > 400) {
    button.classList.remove('hidden');
  } else {
    button.classList.add('hidden');
  }
}

// Add an event listener to the window's scroll event
window.addEventListener('scroll', toggleButton);

// Function to smoothly scroll to the top when the button is clicked

const newUrl = "#"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.location.replace(newUrl);
}

// Add a click event listener to the button
button.addEventListener('click', scrollToTop);

function goBack(){
  window.history.back();
}