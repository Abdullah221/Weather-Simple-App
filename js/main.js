const apiKey = '3d06faf358eefb537f6b72b998ad2186';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Get user's location
let city = prompt("Enter Your City");

// Fetch weather data
fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });