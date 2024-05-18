function validateForm() {
    var username = document.getElementById('username');
    var usernameError = document.getElementById('usernameError');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');
    var passwordError = document.getElementById('passwordError');
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    // Validate Username
    if (!username.value.match(/^[\u2800-\u28FFA-Za-z.]{2,}\s[\u2800-\u28FFA-Za-z.]{2,}$/)) {
        usernameError.textContent = "Please enter your first and last name, each at least two characters long, separated by a space. Names may include Braille characters and dots.";
        usernameError.style.display = "block";
        username.value = '';
        username.focus();
        return false;
    } else {
        usernameError.style.display = "none";
    }

    // Validate Password
    if (!password.value.match(/[A-Za-z0-9]{8,}/)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain only letters and numbers.";
        passwordError.style.display = "block";
        password.focus();
        return false;
    } else {
        passwordError.style.display = "none";
    }

    // Confirm Password
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Passwords do not match!";
        passwordError.style.display = "block";
        password.value = '';
        confirmPassword.value = '';
        password.focus();
        return false;
    } else {
        passwordError.style.display = "none";
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    // Validate Email
    if (!email.value.match(/[a-zA-Z0-9._%+-]+@byui\.edu$/)) {
        emailError.textContent = "Email address must be from the byui.edu domain.";
        emailError.style.display = "block";
        email.value = '';
        email.focus();
        return false;
    } else {
        emailError.style.display = "none";
    }

    return isValid;
}