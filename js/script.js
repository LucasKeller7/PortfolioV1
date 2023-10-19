
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

// collapsible

const coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var divcontent = this.nextElementSibling;
    if (divcontent.style.maxHeight){
      divcontent.style.maxHeight = null;
    } else {
      divcontent.style.maxHeight = divcontent.scrollHeight + "px";
    }
  });
}