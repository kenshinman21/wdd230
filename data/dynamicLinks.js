document.addEventListener("DOMContentLoaded", function() {
    fetch('data/links.json')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('activitiesList');
            list.innerHTML = ''; // Clear existing list items
            data.forEach(week => {
                const weekItem = document.createElement('li');
                weekItem.textContent = week.week + ': ';
                week.links.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.textContent = link.title;
                    weekItem.appendChild(a);
                    weekItem.appendChild(document.createTextNode(', '));
                });
                list.appendChild(weekItem);
            });
        })
        .catch(error => console.error('Error loading the links:', error));
});