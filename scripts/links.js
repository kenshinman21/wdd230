const baseURL = 'https://kenshinman21.github.io/wdd230/';
const linksURL = `https://kenshinman21.github.io/wdd230/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.log('Fetch error:', error);
    }
}

function displayLinks(data) {
    const list = document.getElementById('activitiesList');
    list.innerHTML = '';

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
        if (weekItem.lastChild.textContent === ' | ') {
            weekItem.removeChild(weekItem.lastChild);
        }
        list.appendChild(weekItem);
    });
}

document.addEventListener("DOMContentLoaded", getLinks);