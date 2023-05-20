export class Forecast {
    static today;
    static localTime;
    static sevenDayForecast;

    static async getData(location) {
        const key = 'dbe6006f758d40b3a43175139231905';

        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();

        if (response.ok) {
            this.today = weatherData.current;
            this.localTime = weatherData.location.localtime;
            this.sevenDayForecast = weatherData.forecast.forecastday;
            console.log(`${this.today.avgtemp_c} - ${this.localTime} - ${this.sevenDayForecast[0].day.maxtemp_C}`);
        } else {
            alert('No location found with that name!');
        }
    }

    // ? static getCurrentWeather() {}

    static getDaySummary(i) {
        const day = this.sevenDayForecast[i];
        const date = new Date(day.date);

        return [
            day.day.condition.icon,
            date.toLocaleDateString('en-GB', { weekday: 'short' }),
            Math.round(day.day.avgtemp_c),
            Math.round(day.day.mintemp_c),
            Math.round(day.day.maxtemp_c),
        ];
    }
}
