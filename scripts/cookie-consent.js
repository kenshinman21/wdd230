window.onload = function() {
    let consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
        document.getElementById('cookieConsentBanner').style.display = 'block';
    }

    document.getElementById('acceptCookies').onclick = function() {
        localStorage.setItem('cookieConsent', 'true');
        document.getElementById('cookieConsentBanner').style.display = 'none';
    }
}