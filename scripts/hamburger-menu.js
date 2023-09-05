const hamburgerMenu = document.querySelector('.hamburger-menu')
const header = document.querySelector('header')
const overlay = document.querySelector('.overlay')
const nav = document.querySelector('nav')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    header.classList.toggle('active')
    overlay.classList.toggle('active')
    nav.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    header.classList.remove('active')
    overlay.classList.remove('active')
})