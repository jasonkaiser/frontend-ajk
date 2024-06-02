const apiKey = 'b62ec9702e7fb86f321f4c9ce9d8b8d4';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}


window.onload = getWeather;