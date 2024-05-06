document.querySelector('.hamburger-menu').addEventListener('click', function() {
    var menu = document.querySelector('.nav-menu');
    var isOpen = menu.style.display === 'block';

    if (isOpen) {
        menu.style.display = 'none';
        this.innerHTML = '&#9776;'; // Hamburger icon
    } else {
        menu.style.display = 'block';
        this.innerHTML = '&times;'; // 'X' icon
    }
});

// Ensure nav buttons are visible on large screens regardless of hamburger state
window.addEventListener('resize', function() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width >= 1024) {
        document.querySelector('.nav-menu').style.display = 'flex'; // Ensure it's visible
        document.querySelector('.hamburger-menu').innerHTML = '&#9776;'; // Reset icon
    } else {
        document.querySelector('.nav-menu').style.display = 'none'; // Hide it on smaller screens
    }
});