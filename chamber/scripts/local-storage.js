document.addEventListener('DOMContentLoaded', function() {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();

    if (lastVisit) {
        const previousVisitDate = new Date(lastVisit);
        const timeDiff = now - previousVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        
        if (daysDiff === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Update last visit date in localStorage
    localStorage.setItem('lastVisit', now.toISOString());
});