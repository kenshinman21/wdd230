window.onload = function() {
    if (localStorage.getItem('pageVisits')) {
        localStorage.setItem('pageVisits', Number(localStorage.getItem('pageVisits')) + 1);
    } else {
        localStorage.setItem('pageVisits', 1);
    }
    document.getElementById('visitCount').textContent = localStorage.getItem('pageVisits');
}