const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.749992&lon=6.637143&units=imperial&appid=1dc7ad9a3829d756a20ee3d28ff32098';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      console.log(data); // Output the results to the console for testing

      // Update the DOM with the fetched data
      currentTemp.textContent = `${data.main.temp} °F`;
      const iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.src = iconSrc;
      weatherIcon.alt = data.weather[0].description;
      captionDesc.textContent = data.weather[0].description;
    }
  } catch (error) {
    console.error('Fetch error: ', error);
  }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }  