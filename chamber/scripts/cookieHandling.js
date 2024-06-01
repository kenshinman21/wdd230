// Function to check if the cookieConsent has been set or not
function checkCookieConsent() {
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookieConsentBanner').style.display = 'block';
    }
}

// Function to handle acceptance of cookies
function acceptCookies() {
    setCookie('cookieConsent', 'true', 365);  // Set consent cookie for 365 days
    document.getElementById('cookieConsentBanner').style.display = 'none';  // Hide consent banner
    displayDemographics();  // Display demographics if available
}

// Function to handle rejection of cookies
function rejectCookies() {
    setCookie('cookieConsent', 'false', 365);
    document.getElementById('cookieConsentBanner').style.display = 'none';
    alert("Non-essential cookies have been disabled.");
}

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie's value
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Function to display demographics from a cookie
function displayDemographics() {
    var demographicsInfo = getCookie('demographics');
    if (demographicsInfo) {
        document.getElementById('demographics-content').textContent = demographicsInfo;
    } else {
        document.getElementById('demographics-content').textContent = "No demographic data available.";
    }
}

// Event listeners to check cookie consent and display demographics on page load
document.addEventListener('DOMContentLoaded', function() {
    checkCookieConsent();
    console.log(getCookie('demographics')); // Debugging line
    displayDemographics();
});