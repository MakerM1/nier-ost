const hamburgerMenu = document.querySelector('.hamburger-menu')
const header = document.querySelector('header')
const overlay = document.querySelector('.overlay')
const nav = document.querySelector('nav')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    header.classList.toggle('active')
    overlay.classList.toggle('active')
    nav.classList.toggle('active')
    
    if (audioCnotainer.style.top !== '80%' && header.classList.contains('active')) {
        audioCnotainer.style.transition = 'top 0.3s'
        audioCnotainer.style.top = '190px'
    } else if (audioCnotainer.style.top !== '80%' && !header.classList.contains('active')) {
        audioCnotainer.style.top = '80px'
    }
})

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    header.classList.remove('active')
    overlay.classList.remove('active')
    nav.classList.remove('active')
    audioCnotainer.style.top = '80px'
})