function toggleContent(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const formTimestamp = document.getElementById('form-timestamp');
    
    // Set the hidden input field value to the current date and time
    formTimestamp.value = new Date().toISOString();
    console.log('Form Timestamp:', formTimestamp.value); // Log the timestamp to the console

    const form = document.querySelector('.membership-application-form');
    const firstName = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    const lastName = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const cellphone = document.getElementById('cellphone');
    const cellphoneError = document.getElementById('cellphone-error');
    const businessName = document.getElementById('business-name');
    const businessNameError = document.getElementById('business-name-error');
    const idNumber = document.getElementById('id-number');
    const idNumberError = document.getElementById('id-number-error');
    const titlePosition = document.getElementById('title-position');
    const titlePositionError = document.getElementById('title-position-error');
    const description = document.getElementById('description');
    const descriptionError = document.getElementById('description-error');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate First Name
        if (!firstName.value.match(/[\u2800-\u28FFA-Za-z.]{2,}/)) {
            firstNameError.textContent = "First name must be at least 2 characters long and can include Braille characters and dots. No spaces allowed.";
            firstNameError.style.display = 'block';
            firstName.value = '';
            firstName.focus();
            isValid = false;
        } else {
            firstNameError.style.display = 'none';
        }

        // Validate Last Name
        if (!lastName.value.match(/[\u2800-\u28FFA-Za-z.]{2,}/)) {
            lastNameError.textContent = "Last name must be at least 2 characters long and can include Braille characters and dots. No spaces allowed.";
            lastNameError.style.display = 'block';
            lastName.value = '';
            lastName.focus();
            isValid = false;
        } else {
            lastNameError.style.display = 'none';
        }

        // Validate Email
        if (!email.value.match(/[^@]+@[^@]+\.[a-zA-Z]{2,}/)) {
            emailError.textContent = "Please enter a valid email address with any characters in the username and a standard domain.";
            emailError.style.display = 'block';
            email.value = '';
            email.focus();
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate Cellphone Number
        if (!cellphone.value.match(/^\+?[0-9\s\-\.\(\)]{7,15}$/)) {
            cellphoneError.textContent = "Please enter a valid phone number (e.g., +1 234 567 8901, +44-20-1234-5678).";
            cellphoneError.style.display = 'block';
            cellphone.value = '';
            cellphone.focus();
            isValid = false;
        } else {
            cellphoneError.style.display = 'none';
        }

        // Validate Business Name
        if (!businessName.value.match(/[\u2800-\u28FFA-Za-z0-9 .,'&-]{2,}/)) {
            businessNameError.textContent = "Please enter a valid business or organization name. It must be at least 2 characters long.";
            businessNameError.style.display = 'block';
            businessName.value = '';
            businessName.focus();
            isValid = false;
        } else {
            businessNameError.style.display = 'none';
        }

        // Validate ID Number
        if (!idNumber.value.match(/^[0-9A-Z\-]{5,20}$/)) {
            idNumberError.textContent = "Please enter a valid ID number. ID must be 5-20 characters long and can include numbers, uppercase letters, and hyphens.";
            idNumberError.style.display = 'block';
            idNumber.value = '';
            idNumber.focus();
            isValid = false;
        } else {
            idNumberError.style.display = 'none';
        }

        // Validate Title or Position
        if (!titlePosition.value.match(/^[A-Za-z\s\-]{7,}$/)) {
            titlePositionError.textContent = "Please enter a valid title or position. At least 7 characters are required, including letters, hyphens, and spaces only.";
            titlePositionError.style.display = 'block';
            titlePosition.value = '';
            titlePosition.focus();
            isValid = false;
        } else {
            titlePositionError.style.display = 'none';
        }

        // Validate Description
        if (!description.value.match(/^[A-Za-z0-9\s.,'?!&-]{10,1000}$/)) {
            descriptionError.textContent = "Description can include letters, numbers, spaces, and common punctuation. Min 10 characters, max 1000 characters.";
            descriptionError.style.display = 'block';
            description.value = '';
            description.focus();
            isValid = false;
        } else {
            descriptionError.style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault();  // Stop form submission if any field is invalid
        }
    });
});