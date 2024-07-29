async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '156ad846b0663632aacc93744b00ec04';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = error.message;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherIcon = data.weather[0].icon;
    const weatherDescription = data.weather[0].description;

    weatherInfo.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${weatherDescription}">
        <p>${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}
