document.addEventListener("DOMContentLoaded", function() {
    function adjustBaseFontSize() {
        if (window.innerWidth < 600) {
            document.body.style.fontSize = "14px";
        } else {
            document.body.style.fontSize = "16px";
        }
    }

    // Adjust font size on resize
    window.addEventListener('resize', adjustBaseFontSize);

    // Initial adjustment
    adjustBaseFontSize();
});