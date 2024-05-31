document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().getDay();
    var banner = document.getElementById('event-banner');
    var closeButton = document.getElementById('close-banner');

    if ([1, 2, 3].includes(today)) {
        banner.style.display = 'block';
    }

    // Close the banner when the close button is clicked
    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});