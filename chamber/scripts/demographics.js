document.addEventListener('DOMContentLoaded', function() {
    const demographicsStickyNote = document.querySelector('.sticky-note');

    function toggleDemographicsContent() {
        var content = document.getElementById('demographics-content');
        content.style.display = (content.style.display === "none") ? "block" : "none";

        if (content.style.display === "block") {
            fetch('data/demographics.json')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('name').textContent = data.name;
                    document.getElementById('location').textContent = data.location;
                    document.getElementById('gender').textContent = data.gender;
                    document.getElementById('age').textContent = data.age;
                })
                .catch(error => {
                    console.error('Error loading demographic data:', error);
                    alert('Failed to load demographic data.');
                });
        }
    }

    demographicsStickyNote.onclick = toggleDemographicsContent;
});