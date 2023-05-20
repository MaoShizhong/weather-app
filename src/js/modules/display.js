import { Forecast } from './data.js';

export class DisplayController {
    static showForecast(e) {
        e.preventDefault();
        const input = document.querySelector('input');
        const location = input.value.trim();
        Forecast.getData(location)
            .then(DisplayController.updateMainInfo)
            .then(DisplayController.updateWeek)
            .catch((err) => {
                alert(err);
            });

        // * reset search box text
        input.value = '';
    }

    static updateMainInfo() {
        document.querySelector('#location').textContent = `${Forecast.location}`;
        document.querySelector('#region').textContent = `${Forecast.region}`;
        document.querySelector('#country').textContent = `${Forecast.country}`;
    }

    static updateWeek() {
        const days = document.querySelectorAll('.week');

        // ? i + 1 as current day will be displayed large
        days.forEach((day, i) => DisplayController.updateDay(day, i + 1));
    }

    static updateDay(day, i) {
        const data = Forecast.getDaySummary(i);
        console.log(data[2]);
        day.querySelector('img').src = data[0];
        day.querySelector('h3').textContent = data[1];
        day.querySelector('.average-temp').textContent = `${data[2]} \u00B0C`;
        day.querySelector('.min-max').textContent = `${data[3]} - ${data[4]} \u00B0C`;

        // * update background image for section
        day.dataset.weather = data[5].includes('sunny')
            ? 'sunny'
            : data[5].includes('rain')
            ? 'rain'
            : data[5].includes('snow')
            ? 'snow'
            : data[5].includes('cloudy')
            ? 'cloudy'
            : data[5].includes('overcast')
            ? 'overcast'
            : 'storm';
    }
}
