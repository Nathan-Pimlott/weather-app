import * as React from "react";
import { observer } from "mobx-react-lite";
import { Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";

import WeatherStore from "../../stores/weather";
import Loading from "../core/loading";
import RenderTime from "./time";
import RenderToday from "./today";
import RenderHourly from "./hourly";

const WeatherIndex = () => {
    const weatherStore = React.useContext(WeatherStore);

    const [clock, setClock] = React.useState({
        date: moment().format("dddd Do MMMM YYYY"),
        time: moment().format("HH:mm:ss"),
    });

    React.useEffect(() => {
        weatherStore.getWeather();
        const clockTimer = setInterval(
            () =>
                setClock({
                    date: moment().format("dddd Do MMMM YYYY"),
                    time: moment().format("HH:mm:ss"),
                }),
            1000
        );
        const weatherTimer = setInterval(
            () => weatherStore.getWeather(),
            // 5 mins
            300000
        );
        return () => {
            clearTimeout(clockTimer);
            clearTimeout(weatherTimer);
        };
    }, []);

    if (weatherStore.loading || !weatherStore.weather) {
        return <Loading />;
    }

    return (
        <Grid container>
            <RenderTime clock={clock} />
            <RenderToday weatherStore={weatherStore} />
            <RenderHourly weatherStore={weatherStore} />
        </Grid>
    );
};

export default observer(WeatherIndex);
