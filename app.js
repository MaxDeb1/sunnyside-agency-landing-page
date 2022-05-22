const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navlinks");
let menuOpen = false

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.toggle('open')
    navLinks.classList.toggle('show_menu')
  }
})
