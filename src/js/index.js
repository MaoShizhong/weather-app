import '../css/style.css';
import '../images/cloudy.webp';
import '../images/sunny.webp';
import '../images/storm.webp';
import '../images/rain.webp';
import '../images/snow.webp';

// ! https://api.weatherapi.com/v1/forecast.json?key=dbe6006f758d40b3a43175139231905&q=London&days=7&aqi=no&alerts=no
const key = 'dbe6006f758d40b3a43175139231905';
const form = document.querySelector('form');
form.addEventListener('submit', getWeatherData);

async function getWeatherData(e) {
    e.preventDefault();
    const location = form.querySelector('input').value;
    console.log(location);
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7&aqi=no&alerts=no`,
        { mode: 'cors' }
    );
    const weatherData = await response.json();

    if (response.ok) {
        console.log(weatherData.current.temp_c);
    } else {
        console.log('No location!');
    }
}
