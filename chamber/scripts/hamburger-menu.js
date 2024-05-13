document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menuIcon');
    var menuItems = document.getElementById('menuItems');
    var isOpen = false; // Tracks the menu state

    menuIcon.addEventListener('click', function() {
        isOpen = !isOpen; // Toggle the menu state
        updateMenuDisplay();
    });

    function updateMenuDisplay() {
        if (isOpen) {
            menuItems.style.display = 'block'; // Show the menu
            menuItems.style.position = 'absolute'; // Ensure it's a popup
        } else {
            menuItems.style.display = 'none'; // Hide the menu
        }
        menuIcon.innerHTML = isOpen ? '&times;' : '&#9776;'; // Change icon
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 650) {
            // Always show menu on larger screens
            isOpen = true; // Ensure menu is open
            menuItems.style.display = 'block';
            menuItems.style.position = 'static'; // Normal position
        } else if (window.innerWidth < 650 && !isOpen) {
            // Hide menu on smaller screens if it's not open
            menuItems.style.display = 'none';
        }
    });

    // Initial setup based on current window size
    updateMenuDisplay();
});