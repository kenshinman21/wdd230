document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

    document.getElementById('homeButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Directly navigates to the homepage
    });

    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function () {
            let paragraph = this.closest('.section').querySelector('p');
            paragraph.contentEditable = (paragraph.contentEditable === "true") ? "false" : "true";
            this.textContent = (paragraph.contentEditable === "true") ? 'done' : 'edit'; // Toggle button text
        });
    });
});