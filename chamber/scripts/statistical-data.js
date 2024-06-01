document.addEventListener('DOMContentLoaded', function() {
    const statisticalStickyNote = document.querySelector('.sticky-note[onclick*="statistical-data-content"]');

    // Define the array of data from which to draw random information
    const siteData = [
        "Visitors this month: 10,000",
        "Active users right now: 34",
        "Total page views today: 420",
        "Most visited page: Home",
        "Average session duration: 5 minutes",
        "Number of new subscribers today: 15"
    ];

    function toggleStatisticalDataContent() {
        const contentElement = document.getElementById('statistical-data-content');
        contentElement.style.display = (contentElement.style.display === 'none' ? 'block' : 'none');
        if (contentElement.style.display === 'block') {
            updateContent();
        }
    }

    function updateContent() {
        let usedIndices = new Set();
        let randomData = [];

        while (randomData.length < 3) {
            let randomIndex = Math.floor(Math.random() * siteData.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                randomData.push(siteData[randomIndex]);
            }
        }

        document.getElementById('statistical-data-content').textContent = randomData.join('\n');
    }

    statisticalStickyNote.onclick = toggleStatisticalDataContent;
});