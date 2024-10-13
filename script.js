document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeatherData(city);
});

document.getElementById('location-btn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherData(null, lat, lon);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

async function getWeatherData(city, lat, lon) {
    const apiKey = 'ae9eee691a14d73a87998782c815304a';
    const unit = 'metric'; // 'imperial' for Fahrenheit
    let url;

    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    displayWeatherData(data);
    getForecastData(city, lat, lon);
}

async function getForecastData(city, lat, lon) {
    const apiKey = 'ae9eee691a14d73a87998782c815304a';
    const unit = 'metric'; // 'imperial' for Fahrenheit
    let url;

    if (city) {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    displayForecastData(data);
}

function displayWeatherData(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>${Math.round(data.main.temp)}°C</p>
        <p>${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
    `;
}

function displayForecastData(data) {
    const forecastResult = document.getElementById('forecast-result');
    forecastResult.innerHTML = '';

    // Filtering forecast data to show only 4 days (3 days + today)
    const filteredList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 4);

    filteredList.forEach(item => {
        forecastResult.innerHTML += `
            <div class="forecast-day">
                <p class="date">${new Date(item.dt_txt).toLocaleDateString()}</p>
                <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather Icon">
                <p class="temp">${Math.round(item.main.temp)}°C</p>
                <p>${item.weather[0].description}</p>
            </div>
        `;
    });
}
