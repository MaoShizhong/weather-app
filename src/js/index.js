import { DisplayController } from './modules/display.js';
import '../css/style.css';
import '../images/cloudy.webp';
import '../images/sunny.webp';
import '../images/storm.webp';
import '../images/rain.webp';
import '../images/snow.webp';

const form = document.querySelector('form');
form.addEventListener('submit', DisplayController.showForecast);

// * initialise on load
document.querySelector('button').click();
