const menu = document.querySelector('.menu-icon');
const menulinks = document.querySelector('.menu-links');

window.addEventListener("load", function() {
  	document.querySelector(".loading").style.display = "none";
});
menu.addEventListener('click', function() {
    menulinks.classList.toggle('active');
});