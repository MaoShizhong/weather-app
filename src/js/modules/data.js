export class Forecast {
    static city;
    static location;
    static lastUpdatedLocalTime;
    static forecast;

    static get date() {
        const dateAsObj = new Date(this.lastUpdatedLocalTime);
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
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&include=days%2Ccurrent&key=ZT3UKYQ382UL3EH7F7WRSF2AW&contentType=json`,
            { mode: 'cors' }
        );

        if (response.ok) {
            const weatherData = await response.json();
            const cityLocationSplit = await weatherData.resolvedAddress.indexOf(',');
            this.city = await weatherData.resolvedAddress.slice(0, cityLocationSplit);
            this.location = await weatherData.resolvedAddress.slice(cityLocationSplit + 2);
            this.lastUpdatedLocalTime = `${await weatherData.days[0].datetime}T${await weatherData.currentConditions.datetime}`;
            this.forecast = await weatherData.days;
        }
        else {
            throw 'No location found with that name!';
        }
    }

    static getCurrentWeather() {
        const current = this.forecast[0];

        return [
            Math.round(current.temp),
            current.conditions,
            Math.round(current.feelslike),
            Math.round(current.tempmax),
            Math.round(current.tempmin),
            Math.round(current.precipprob),
        ];
    }

    static getDaySummary(i) {
        const day = this.forecast[i];
        const date = new Date(day.datetime);

        return [
            date.toLocaleDateString('en-GB', { weekday: 'short' }),
            Math.round(day.temp),
            Math.round(day.tempmin),
            Math.round(day.tempmax),
            day.conditions,
        ];
    }
}
