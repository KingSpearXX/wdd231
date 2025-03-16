const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active');
});