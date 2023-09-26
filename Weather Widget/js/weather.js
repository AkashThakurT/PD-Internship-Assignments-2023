document.getElementById('getForecastBtn').addEventListener('click', function () {
    const locationName = document.getElementById('locationInput').value.trim();

    if (locationName !== '') {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=0937e9b0aaf0d8bfed86063e4d734b43`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    displayError('Weather Information not available');
                } else {
                    displayWeather(data);
                }
            })
            .catch(error => {
                displayError('Error fetching data');
            });
    } else {
        displayError('Please enter a location');
    }
});

function displayWeather(data) {
    const locationElement = document.getElementById('locationName');
    const temperatureElement = document.getElementById('temperature');
    const weatherImageElement = document.getElementById('weatherImage');

    locationElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    weatherImageElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

function displayError(message) {
    const locationElement = document.getElementById('locationName');
    const temperatureElement = document.getElementById('temperature');
    const weatherImageElement = document.getElementById('weatherImage');

    locationElement.textContent = message;
    temperatureElement.textContent = '';
    weatherImageElement.src = '';
}
