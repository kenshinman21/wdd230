document.addEventListener('DOMContentLoaded', function() {
    var activitiesList = document.getElementById('activitiesList');
    
    if (activitiesList) {
        activitiesList.innerHTML = '';
        
        var dynamicContent = [
            "Week 1: <a href='#'>Dynamic Activity 1</a>",
            "Week 2: <a href='#'>Dynamic Activity 2</a>",
            "Week 3: <a href='#'>Dynamic Activity 1</a>",
            "Week 4: <a href='#'>Dynamic Activity 1</a>",
            "Week 5: <a href='#'>Dynamic Activity 1</a>",
            "Week 6: <a href='#'>Dynamic Activity 1</a>",
            "Week 7: <a href='#'>Dynamic Activity 1</a>",
        ];

        dynamicContent.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.innerHTML = item;
            activitiesList.appendChild(listItem);
        });
    }
});