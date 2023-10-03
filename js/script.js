
// back to top button

const button = document.getElementById('fixedButton');

function toggleButton() {
  if (window.scrollY > 400) {
    button.classList.remove('hidden');
  } else {
    button.classList.add('hidden');
  }
}

window.addEventListener('scroll', toggleButton);

const newUrl = "#"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.location.replace(newUrl);
}

button.addEventListener('click', scrollToTop);

// back to main page button

function goBack(){
  window.history.back();
}