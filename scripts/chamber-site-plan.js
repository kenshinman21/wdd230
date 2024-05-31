document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

    document.getElementById('homeButton').addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });

    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function () {
            let paragraph = this.closest('.section').querySelector('p');
            if (paragraph.contentEditable === "true") {
                paragraph.contentEditable = "false";
                this.textContent = 'edit'; 
            } else {
                paragraph.contentEditable = "true";
                this.textContent = 'done'; 
                paragraph.focus(); 
            }
        });
    });

    document.querySelectorAll('.edit-image').forEach(button => {
        button.addEventListener('click', function() {
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