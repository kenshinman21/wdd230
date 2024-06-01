document.addEventListener('DOMContentLoaded', function() {
    const eventsStickyNote = document.querySelector('.sticky-note[onclick*="events-content"]');

    function toggleEventsContent() {
        const contentElement = document.getElementById('events-content');
        contentElement.style.display = (contentElement.style.display === 'none' ? 'block' : 'none');

        if (contentElement.style.display === 'block') {
            fetch('data/events.json')
                .then(response => response.json())
                .then(data => {
                    let eventsHtml = data.events.map(event => `<strong>${event.name}:</strong> ${event.description}<br>`).join('');
                    contentElement.innerHTML = eventsHtml;
                })
                .catch(error => {
                    console.error('Error loading events data:', error);
                    alert('Failed to load events data.');
                });
        }
    }

    eventsStickyNote.onclick = toggleEventsContent;
});