document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('datepicker');

    // Initialize Pikaday
    var picker = new Pikaday({ 
        field: input,
        onSelect: function() {
            console.log(this.getMoment().format('Do MMMM YYYY'));
        }
    });

    // Toggle function for calendar visibility
    function toggleCalendar() {
        const contentElement = document.getElementById('calendar-content');
        contentElement.style.display = (contentElement.style.display === 'none' ? 'block' : 'none');
        // Adjust position when displayed
        if (contentElement.style.display === 'block') {
            picker.adjustPosition();
        }
    }

    // Bind toggle function to sticky note click
    const calendarStickyNote = document.querySelector('.sticky-note[onclick*="calendar-content"]');
    calendarStickyNote.onclick = toggleCalendar;
});

window.toggleContent = function(contentId) {
    const content = document.getElementById(contentId);
    content.style.display = (content.style.display === 'none' ? 'block' : 'none');
    // Optional: Adjust arrow direction based on visibility
    const arrow = document.querySelector('.sticky-note::after');
    if (content.style.display === 'none') {
        arrow.style.transform = 'rotate(0deg)';
    } else {
        arrow.style.transform = 'rotate(180deg)';
    }
};