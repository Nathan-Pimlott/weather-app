import axios from "axios";
import moment from "moment";
import { getLocation } from "../../utils";

interface IProps {
    lat: string;
    lon: string;
    appid: string;
}

// Get the current weather for user's location
const getWeather = async (props: IProps) => {
    try {
        const locationRes = await getLocation();

        // Call the api to get the product by the id
        const weatherRes = await axios.get(
            "https://api.openweathermap.org/data/2.5/onecall",
            {
                params: {
                    appid: props.appid,
                    lat: locationRes.coords.latitude,
                    lon: locationRes.coords.longitude,
                    units: "metric",
                },
            }
        );

        // Format some basic data from the response
        const formattedData = {
            current: {
                temp: Math.round(weatherRes.data.current.temp),
                weather: weatherRes.data.current.weather[0].main.toLowerCase(),
                weatherDescription:
                    weatherRes.data.current.weather[0].description.toLowerCase(),
                // I only want day icons, so replace night for day
                icon: weatherRes.data.current.weather[0].icon.replace("n", "d"),
                windSpeed: Math.round(weatherRes.data.current.wind_speed),
            },
            hourly: {
                today: [],
                tomorrow: [],
            },
        };

        // Push the next 6 hours into either today or tomorrow's weather
        weatherRes.data.hourly.slice(1, 7).map((hour) => {
            const dayOfHour = moment(hour.dt, "X").format("YYYY-MM-DD");
            const today = moment().format("YYYY-MM-DD");
            const hourValues = {
                time: moment(hour.dt, "X").format("HH:mm"),
                temp: Math.round(hour.temp),
                weather: hour.weather[0].main.toLowerCase(),
                weatherDescription: hour.weather[0].description.toLowerCase(),
                icon: hour.weather[0].icon,
            };

            if (dayOfHour === today) {
                formattedData.hourly.today.push(hourValues);
            } else {
                formattedData.hourly.tomorrow.push(hourValues);
            }
        });

        // Return the formatted weather data
        return formattedData;
    } catch (error) {
        console.log("Error: ", error);

        throw Error(error);
    }
};

export default getWeather;
