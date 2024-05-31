document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

    document.getElementById('homeButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Directly navigates to the homepage
    });

    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function () {
            let paragraph = this.closest('.section').querySelector('p');
            if (paragraph.contentEditable === "true") {
                paragraph.contentEditable = "false";
                this.textContent = 'edit'; // Change button text to 'edit'
            } else {
                paragraph.contentEditable = "true";
                this.textContent = 'done'; // Change button text to 'done'
                paragraph.focus(); // Focuses the paragraph to allow immediate editing
            }
        });
    });

    document.querySelectorAll('.edit-image').forEach(button => {
        button.addEventListener('click', function() {
            // Trigger the hidden file input associated with this button
            const fileInput = this.nextElementSibling;
            fileInput.click();
        });
    });

    document.querySelectorAll('.image-input').forEach(input => {
        input.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                // Get the image element associated with this input
                var img = this.previousElementSibling.previousElementSibling; 
                const fileReader = new FileReader();
                fileReader.onload = function(e) {
                    img.src = e.target.result; 
                };
                fileReader.readAsDataURL(this.files[0]); 
            }
        });
    });
});