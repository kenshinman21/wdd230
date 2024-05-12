document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menuIcon');
    var menuItems = document.getElementById('menuItems');
    var isOpen = false; // State to track if the menu is open

    menuIcon.addEventListener('click', function() {
        isOpen = !isOpen; // Toggle the state
        updateMenuDisplay();
    });

    function updateMenuDisplay() {
        if (window.innerWidth >= 650) {
            // Always show menu for screens wider than 650px
            menuItems.style.display = 'flex';
        } else {
            // Toggle based on menu state for smaller screens
            menuItems.style.display = isOpen ? 'block' : 'none';
        }
        // Update the icon
        menuIcon.innerHTML = isOpen ? '&times;' : '&#9776;';
    }

    // Reset menu state on window resize
    window.addEventListener('resize', function() {
        isOpen = false; // Reset the open state
        updateMenuDisplay(); // Update display based on new window size
    });

    updateMenuDisplay(); // Initial display setup
});