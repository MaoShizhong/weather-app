export class Forecast {
    static location;
    static region;
    static country;
    static today;
    static localTime;
    static weekForecast;

    static get date() {
        const dateAsObj = new Date(this.localTime);
        return `${dateAsObj.toLocaleDateString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour12: true,
        })} (local)`;
    }

    static async getData(location) {
        const key = 'dbe6006f758d40b3a43175139231905';
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();

        if (response.ok) {
            this.location = await weatherData.location.name;
            this.region = await weatherData.location.region;
            this.country = await weatherData.location.country;
            this.today = await weatherData.current;
            this.localTime = await weatherData.location.localtime;
            this.weekForecast = await weatherData.forecast.forecastday;
        }
        else {
            throw 'No location found with that name!';
        }
    }

    static getCurrentWeather() {
        const current = this.today;
        const currentExtra = this.weekForecast[0];

        return [
            current.condition.icon,
            Math.round(current.temp_c),
            current.condition.text,
            Math.round(current.feelslike_c),
            Math.round(currentExtra.day.maxtemp_c),
            Math.round(currentExtra.day.mintemp_c),
            Math.round(currentExtra.day.daily_chance_of_rain),
        ];
    }

    static getDaySummary(i) {
        const day = this.weekForecast[i];
        const date = new Date(day.date);

        return [
            day.day.condition.icon,
            date.toLocaleDateString('en-GB', { weekday: 'short' }),
            Math.round(day.day.avgtemp_c),
            Math.round(day.day.mintemp_c),
            Math.round(day.day.maxtemp_c),
            day.day.condition.text,
        ];
    }
}
