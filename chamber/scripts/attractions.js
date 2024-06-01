document.addEventListener('DOMContentLoaded', function() {
    const attractionsStickyNote = document.querySelector('.sticky-note[onclick*="attractions-content"]');

    function toggleAttractionsContent() {
        const contentElement = document.getElementById('attractions-content');
        contentElement.style.display = (contentElement.style.display === 'none' ? 'block' : 'none');

        if (contentElement.style.display === 'block') {
            fetch('data/attractions.json')
                .then(response => response.json())
                .then(data => {
                    let attractionsHtml = data.attractions.map(attraction => `<strong>${attraction.name}:</strong> ${attraction.description}<br>`).join('');
                    contentElement.innerHTML = attractionsHtml;
                })
                .catch(error => {
                    console.error('Error loading attractions data:', error);
                    alert('Failed to load attractions data.');
                });
        }
    }

    attractionsStickyNote.onclick = toggleAttractionsContent;
});