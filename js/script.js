
// menu hamburguer

const menu = document.querySelector('.container')
function myFunction() {
    menu.classList.toggle("change");
   const nav = document.querySelector('.nav-header ') 
   nav.classList.toggle("active")
   
  }
 menu.addEventListener("click",myFunction)

// menu flutuante

 let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-header").style.top = "0";
  } else {
    document.querySelector(".nav-header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


