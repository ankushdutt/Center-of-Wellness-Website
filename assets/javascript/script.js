AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

document.getElementById("rp").addEventListener("click", myFunctionP)
document.getElementById("rs").addEventListener("click", myFunctionS)
document.getElementById("re").addEventListener("click", myFunctionE)

var e = document.getElementsByClassName("r-ebooks")[0];
var s = document.getElementsByClassName("r-stories")[0];
var p = document.getElementsByClassName("r-posts")[0];

function myFunctionP() {
  rp.classList.add("is-active")
  rs.classList.remove("is-active")
  re.classList.remove("is-active")
  e.classList.add("hidden")
  s.classList.add("hidden")
  p.classList.remove("hidden")
}

function myFunctionS() {
  rs.classList.add("is-active")
  rp.classList.remove("is-active")
  re.classList.remove("is-active")
  e.classList.add("hidden")
  p.classList.add("hidden")
  s.classList.remove("hidden")
}

function myFunctionE() {
  re.classList.add("is-active")
  rs.classList.remove("is-active")
  rp.classList.remove("is-active")
  s.classList.add("hidden")
  p.classList.add("hidden")
  e.classList.remove("hidden")
}