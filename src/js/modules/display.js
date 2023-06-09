import { Forecast } from './data.js';

export class DisplayController {
    static showForecast(e) {
        e.preventDefault();
        const input = document.querySelector('input');
        const location = input.value.trim();
        Forecast.getData(location)
            .then(DisplayController.updateMainInfo)
            .then(DisplayController.updateWeek)
            .catch((err) => alert(err));

        // * reset search box text
        input.value = '';
    }

    static updateMainInfo(inCelsius = true) {
        const data = Forecast.getCurrentWeather();

        let unit = 'C';
        if (!inCelsius) {
            data[0] = this.toFahrenheit(data[0]);
            data[2] = this.toFahrenheit(data[2]);
            data[3] = this.toFahrenheit(data[3]);
            data[4] = this.toFahrenheit(data[4]);
            unit = 'F';
        }

        const content = [Forecast.city, Forecast.location, `Last updated: ${Forecast.date}`];
        const textDetails = document.querySelectorAll('#text-details > *');
        textDetails.forEach((field, i) => field.textContent = content[i]);



        // * extra details
        const rightPanelContent = [
            `<i>${data[1]}</i>`,
            `Feels like ${data[2]} \u00B0${unit}`,
            `<b>Max:</b>\xa0\xa0\xa0${data[3]} \u00B0${unit}`,
            `<b>Min:</b>\xa0\xa0\xa0${data[4]} \u00B0${unit}`,
            `<b>Chance of rain:</b>\xa0\xa0\xa0${data[5]}%`,
        ];
        const rightPanel = document.querySelectorAll('.right > *');
        rightPanel.forEach((field, i) => field.innerHTML = rightPanelContent[i]);

        // * change background image
        const today = document.querySelector('#today');
        today.dataset.weather = DisplayController.setDataWeather(data[1]);

        // * icon and big temperature
        document.querySelector('.left > img').src = require(`../../images/weather-icons/${data[6]}.png`);
        document.querySelector('.left > h1').textContent = `${data[0]} \u00B0${unit}`;
    }

    static updateWeek(inCelcius = true) {
        // * i + 1 to only affect days 2-7 forecast display (day 1 to be displayed differently)
        const days = document.querySelectorAll('.week');
        days.forEach((day, i) => DisplayController.updateDay(day, i + 1, inCelcius));
    }

    static updateDay(day, i, inCelsius = true) {
        const data = Forecast.getDaySummary(i);

        let unit = 'C';
        if (!inCelsius) {
            data[1] = this.toFahrenheit(data[1]);
            data[2] = this.toFahrenheit(data[2]);
            data[3] = this.toFahrenheit(data[3]);
            unit = 'F';
        }

        day.querySelector('h3').textContent = data[0];
        day.querySelector('.average-temp').textContent = `${data[1]} \u00B0${unit}`;
        day.querySelector('.min-max').textContent = `${data[2]} - ${data[3]} \u00B0${unit}`;

        // * update background image for section
        day.dataset.weather = DisplayController.setDataWeather(data[4]);
        day.querySelector('img').src = require(`../../images/weather-icons/${data[5]}.png`);
    }

    static setDataWeather(condition) {
        if (/sunny|clear/i.test(condition)) {
            return 'sunny';
        }
        else if (/ice|snow|blizzard|sleet|(freez)(?!.+fog)/i.test(condition)) {
            return 'snow';
        }
        else if (/rain|shower|drizzle/i.test(condition)) {
            return 'rain';
        }
        else if (/cloudy|mist/i.test(condition)) {
            return 'cloudy';
        }
        else if (/fog|overcast/i.test(condition)) {
            return 'overcast';
        }
        else {
            return 'storm';
        }
    }

    static toFahrenheit(temp) {
        return Math.round((temp * 9) / 5 + 32);
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
