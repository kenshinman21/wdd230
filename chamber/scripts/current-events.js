document.addEventListener('DOMContentLoaded', function() {
    fetch('data/current-events.json')
    .then(response => response.json())
    .then(data => {
        data.events.forEach((event, index) => {
            document.getElementById(`current-event${index+1}-name`).textContent = `Current Event ${index+1}: ${event.name}`;
            document.getElementById(`current-event${index+1}-description`).textContent = `Description: ${event.description}`;
        });
    })
    .catch(error => console.error('Error loading events:', error));
});