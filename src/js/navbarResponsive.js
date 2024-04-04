document.addEventListener('DOMContentLoaded', function () {
    const iconMenu = document.querySelector('.icon-menu');
    const navbar = document.querySelector('.navbar');

    iconMenu.addEventListener('click', function () {
        navbar.classList.toggle('active'); 
    });
});