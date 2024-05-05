document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const bodyElement = document.body;

    toggleButton.addEventListener('click', function() {
        bodyElement.classList.toggle('dark-mode'); // Toggle dark mode on the body
    });
});