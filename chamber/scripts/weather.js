document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '1dc7ad9a3829d756a20ee3d28ff32098';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Nacogdoches&appid=1dc7ad9a3829d756a20ee3d28ff32098&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const locationName = data.city.name;
            document.getElementById('weather-location').textContent = `Location: ${locationName}`;

            const currentWeather = data.list[0];
            const temperature = currentWeather.main.temp;
            const description = currentWeather.weather[0].description;
            const iconCode = currentWeather.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            document.getElementById('current-temp').textContent = `Temperature: ${temperature} °C`;
            document.getElementById('weather-desc').textContent = `Condition: ${description}`;
            document.getElementById('weather-icon').src = iconUrl; // Assumes an <img> with id="weather-icon"
            document.getElementById('weather-icon').alt = description;

            // Forecast for the next three days
            const now = new Date();
            const firstMiddayIndex = data.list.findIndex(entry => {
                const entryDate = new Date(entry.dt * 1000);
                return entryDate.getHours() === 12 && entryDate.getDate() >= now.getDate();
            });

            const forecastIndices = [0, 1, 2].map(day => firstMiddayIndex + day * 8); // 8 indices per day
            forecastIndices.forEach((index, i) => {
                const forecast = data.list[index];
                if (forecast) {
                    const date = new Date(forecast.dt * 1000);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
                    const dayTemperature = forecast.main.temp;
                    const dayDescription = forecast.weather[0].description;
                    const dayIconCode = forecast.weather[0].icon;
                    const dayIconUrl = `https://openweathermap.org/img/wn/${dayIconCode}.png`;

                    document.getElementById(`day${i + 1}`).textContent = `${dayName}: ${dayTemperature} °C, ${dayDescription}`;
                    document.getElementById(`icon${i + 1}`).src = dayIconUrl; // Assumes <img> elements with id="icon1", "icon2", "icon3"
                    document.getElementById(`icon${i + 1}`).alt = dayDescription;
                }
            });
        })
        .catch(error => console.error('Error fetching weather data: ', error));
});