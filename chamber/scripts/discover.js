function toggleContent(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}
document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = now - lastVisitDate; // Difference in milliseconds
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            let dayText = daysDiff === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }
    localStorage.setItem('lastVisit', now.toISOString());
});