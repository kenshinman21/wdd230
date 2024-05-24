document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '1dc7ad9a3829d756a20ee3d28ff32098';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Nacogdoches&appid=1dc7ad9a3829d756a20ee3d28ff32098&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

            document.getElementById('weatherTemperature').textContent = `Temperature: ${temperature} °C`;
            document.getElementById('weatherDescription').textContent = `Condition: ${description}`;
            document.getElementById('weatherIcon').src = iconUrl;
            document.getElementById('weatherIcon').alt = description;
        })
        .catch(error => console.error('Error fetching the weather data: ', error));
});