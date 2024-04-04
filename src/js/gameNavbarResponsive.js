document.addEventListener('DOMContentLoaded', function () {
    const iconMenu = document.querySelector('.icon-menu');
    const navbar = document.querySelector('.game-nav');

    iconMenu.addEventListener('click', function () {
        navbar.classList.toggle('active'); 
    });

    
});