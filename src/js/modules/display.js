import { Forecast } from './data.js';

export class DisplayController {
    static showForecast(e) {
        e.preventDefault();
        const input = document.querySelector('input');
        const location = input.value.trim();
        Forecast.getData(location).then(DisplayController.updateSevenDay);

        // ! remove as only temporary
        document.querySelector('#location').textContent = `${location[0].toUpperCase()}${location
            .toLowerCase()
            .slice(1)}`;

        // * reset search box text
        input.value = '';

        // ! remove as only temporary

        // this.updateSevenDay();
        // ! this.updateMainInfo();
    }

    static updateSevenDay() {
        const days = document.querySelectorAll('.seven-day');
        days.forEach((day, i) => DisplayController.updateDay(day, i));
    }

    static updateDay(day, i) {
        const data = Forecast.getDaySummary(i);

        day.querySelector('img').src = data[0];
        day.querySelector('h3').textContent = data[1];
        day.querySelector('.average-temp').textContent = `${data[2]} \u00B0C`;
        day.querySelector('.min-max').textContent = `${data[3]} - ${data[4]} \u00B0C`;
    }

    // ? static updateMainInfo() {}
}
