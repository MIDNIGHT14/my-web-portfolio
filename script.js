const menuButton = document.getElementById('menu-button')
const mobileNav = document.getElementById('nav-links-mobile')

menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('block')
  mobileNav.classList.toggle('hidden')
})