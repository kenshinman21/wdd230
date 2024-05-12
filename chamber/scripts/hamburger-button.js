document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        var isOpen = menu.style.display === 'block';
        
        if (isOpen) {
            menu.style.display = 'none';
            hamburger.innerHTML = '≡'; // Hamburger icon
        } else {
            menu.style.display = 'block';
            hamburger.innerHTML = '×'; // 'X' icon for close
        }
    });
});