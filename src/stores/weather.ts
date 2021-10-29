import { createContext } from "react";
import { makeAutoObservable } from "mobx";

import { getWeather } from "../services/weather";
import { IWeather } from "../types";

class WeatherStore {
    loading: boolean = false;
    error: string | null = null;
    weather: any | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getWeather = async () => {
        try {
            this.loading = true;

            const values = {
                lat: process.env.LAT,
                lon: process.env.LNG,
                appid: process.env.API_KEY,
            };
            this.weather = await getWeather(values);

            this.loading = false;
        } catch (error) {
            console.error(error.message);
            this.error = error.message;
            this.loading = false;
        }
    };
}

const weatherStore = createContext(new WeatherStore());

export default weatherStore;
