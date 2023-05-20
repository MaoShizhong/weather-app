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

    static updateMainInfo(inCelcius) {
        document.querySelector('#location').textContent = `${Forecast.location}`;
        document.querySelector('#region').textContent = `${Forecast.region}`;
        document.querySelector('#country').textContent = `${Forecast.country}`;
    }

    static updateWeek(inCelcius = true) {
        const days = document.querySelectorAll('.week');

        // ? i + 1 as current day will be displayed large
        days.forEach((day, i) => DisplayController.updateDay(day, i + 1, inCelcius));
    }

    static updateDay(day, i, inCelsius = true) {
        const data = Forecast.getDaySummary(i);

        const unit = inCelsius ? 'C' : 'F';
        if (!inCelsius) {
            data[2] = Math.round((data[2] * 9) / 5 + 32);
            data[3] = Math.round((data[3] * 9) / 5 + 32);
            data[4] = Math.round((data[4] * 9) / 5 + 32);
        }

        day.querySelector('img').src = data[0];
        day.querySelector('h3').textContent = data[1];
        day.querySelector('.average-temp').textContent = `${data[2]} \u00B0${unit}`;
        day.querySelector('.min-max').textContent = `${data[3]} - ${data[4]} \u00B0${unit}`;

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

        if (/sunny/.test(data[5])) {
            day.dataset.weather = 'sunny';
        } else if (/ice|snow|blizzard|sleet|(freez)(?!.+fog)/.test(data[5])) {
            day.dataset.weather = 'snow';
        } else if (/rain|shower|drizzle/.test(data[5])) {
            day.dataset.weather = 'rain';
        } else if (/cloudy|mist/.test(data[5])) {
            day.dataset.weather = 'cloudy';
        } else if (/fog|overcast/.test(data[5])) {
            day.dataset.weather = 'overcast';
        } else {
            day.dataset.weather = 'storm';
        }
    }

    static changeUnits(e) {
        const inCelsius = e.target.value === 'celsius';

        DisplayController.updateMainInfo(inCelsius);
        DisplayController.updateWeek(inCelsius);

        // * adjust btn visuals
        const current = document.querySelector('.current-btn');
        current.classList.remove('current-btn');
        e.target.classList.add('current-btn');
    }
}
