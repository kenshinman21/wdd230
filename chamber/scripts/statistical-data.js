document.addEventListener('DOMContentLoaded', function() {
    const stickyNote = document.querySelector('.sticky-note');

    // Define the array of data from which to draw random information
    const siteData = [
        "Visitors this month: 10,000",
        "Active users right now: 34",
        "Total page views today: 420",
        "Most visited page: Home",
        "Average session duration: 5 minutes",
        "Number of new subscribers today: 15"
    ];

    // Function to update content
    function updateContent() {
        const contentElement = document.getElementById('statistical-data-content');

        // Select three random pieces of data
        let randomData = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * siteData.length);
            randomData.push(siteData[randomIndex]);
        }

        // Update the content of the paragraph
        contentElement.innerHTML = randomData.join('<br>'); // Join the array elements with a line break
    }

    // Event listener for the sticky note click
    stickyNote.onclick = function() {
        updateContent(); // Call function to update content
        const contentElement = document.getElementById('statistical-data-content');
        // Toggle the display style
        contentElement.style.display = (contentElement.style.display === 'none' ? 'block' : 'none');
    };
});