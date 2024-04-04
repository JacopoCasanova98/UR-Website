document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const iconMenu = document.querySelector('.icon-menu');
    const navLinksNavbar = document.querySelectorAll('.nav-link-navbar-game');

    checkAndUpdateScrollClass();

    window.addEventListener('scroll', function () {
        checkAndUpdateScrollClass();
    });

    iconMenu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    function checkAndUpdateScrollClass() {
        if (window.innerWidth > 1024) {
            if (window.scrollY > 50) {
                navbar.classList.add('scroll');
                navbar.style.position = 'fixed';
                navbar.style.transition = 'position 0.3s ease-in-out';
            } else {
                navbar.classList.remove('scroll');
                navbar.style.position = 'relative';
                navbar.style.transition = 'position 0.6s ease-in-out';
            }
        } else {
            navbar.style.position = 'fixed'; 
        }
    }
});
