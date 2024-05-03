document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestionsContainer = document.getElementById('suggestionsContainer');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const suggestions = getSuggestions(query);
        showSuggestions(suggestions);
    });

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        // Perform search or navigate to search results page
        console.log('Search query:', query);
    });

    function getSuggestions(query) {
        // Example suggestions logic (replace with your actual suggestions logic)
        const suggestions = ['apple', 'banana', 'orange', 'pear'];
        return suggestions.filter(suggestion => suggestion.startsWith(query));
    }

    function showSuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
        if (suggestions.length > 0) {
            suggestionsContainer.style.display = 'block';
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion');
                suggestionElement.textContent = suggestion;
                suggestionElement.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(suggestionElement);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }

    document.addEventListener('click', function(event) {
        if (!event.target.matches('#searchInput')) {
            suggestionsContainer.style.display = 'none';
        }
    });
});