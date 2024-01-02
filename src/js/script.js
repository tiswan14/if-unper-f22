const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    const menu = document.querySelector('.menu')
    menu.classList.toggle('hidden')

    const sosmed = document.querySelector('.sosmed')
    sosmed.classList.toggle('hidden')

    const home = document.querySelector('home')
    home.scrollIntoView({behavior: 'smooth', block: 'start'})


})


// Pernavbaran

