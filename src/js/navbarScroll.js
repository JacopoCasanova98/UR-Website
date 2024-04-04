document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinksNavbar = document.querySelectorAll('.nav-link-navbar');

    checkAndUpdateScrollClass();

    window.addEventListener('scroll', function () {
        checkAndUpdateScrollClass();
    });

    function checkAndUpdateScrollClass() {

        if (window.innerWidth > 1024) {
            if (window.scrollY > 50) {
                navbar.classList.add('scroll');
            } else {
                navbar.classList.remove('scroll');
            }
        }
    }
});
