const menu = document.querySelector('.menu-icon');
const menulinks = document.querySelector('.menu-links');

menu.addEventListener('click', function() {
    menulinks.classList.toggle('active');
});