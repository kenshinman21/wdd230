document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

    document.getElementById('homeButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function () {
            let p = this.previousElementSibling;
            if (p.contentEditable === "true") {
                p.contentEditable = "false";
            } else {
                p.contentEditable = "true";
            }
        });
    });
});