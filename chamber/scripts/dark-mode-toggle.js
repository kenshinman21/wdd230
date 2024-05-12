document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        var circle = darkModeToggle.querySelector('.toggle-circle');
        
        // Move the toggle circle based on whether dark mode is active
        if (body.classList.contains('dark-mode')) {
            circle.style.transform = 'translateX(24px)';  // Move to the right
        } else {
            circle.style.transform = 'translateX(0)';  // Move back to the left
        }
    });
});