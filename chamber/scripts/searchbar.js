document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.search-form');
    form.addEventListener('submit', function(event) {
        var input = document.getElementById('siteSearch');
        console.log('Searching for:', input.value); // Log the search term
    });
});