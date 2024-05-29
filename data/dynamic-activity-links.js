const linksURL = 'https://kenshinman21.github.io/wdd230/data/links.json';

async function getAndDisplayLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const list = document.getElementById('activitiesList');
        list.innerHTML = ''; // Clear existing list items

        data.weeks.forEach(week => {
            const weekItem = document.createElement('li');
            weekItem.textContent = `${week.week}: `;
            week.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.title;
                weekItem.appendChild(a);
                weekItem.appendChild(document.createTextNode(' | '));
            });

            // Remove the last separator (' | ' or ', ') for aesthetics
            let lastChild = weekItem.lastChild;
            if (lastChild.textContent.trim() === '|' || lastChild.textContent.trim() === ',') {
                weekItem.removeChild(lastChild);
            }

            list.appendChild(weekItem);
        });
    } catch (error) {
        console.error('Error loading the links:', error);
    }
}

document.addEventListener("DOMContentLoaded", getAndDisplayLinks);