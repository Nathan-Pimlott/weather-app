import * as React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@material-ui/core";

interface IProps {
    weatherStore: any;
}

const WeatherToday = ({ weatherStore }: IProps) => {
    return (
        <Grid item xs={6} style={{ textAlign: "center", display: "flex" }}>
            <div
                style={{
                    borderRadius: "50%",
                    backgroundColor: "darkGrey",
                    color: "white",
                    height: 350,
                    width: 350,
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                }}
            >
                <div style={{ flex: 1, display: "flex" }}>
                    <Typography
                        variant="h1"
                        style={{ margin: "auto auto 0 auto" }}
                    >
                        {weatherStore.weather.current.temp}°C
                    </Typography>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div style={{ margin: "0 auto", display: "flex", flex: 1 }}>
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherStore.weather.current.icon}@2x.png`}
                            alt="weather icon"
                            style={{
                                height: 100,
                                width: "auto",
                                margin: "auto 0 auto auto",
                            }}
                        />
                        <Typography
                            variant="h3"
                            style={{
                                margin: "auto auto auto 0",
                                textTransform: "capitalize",
                            }}
                        >
                            {weatherStore.weather.current.weather}
                        </Typography>
                    </div>
                    <div style={{ flex: 1, margin: "0 auto auto auto" }}>
                        <Typography
                            variant="h6"
                            style={{ textTransform: "capitalize" }}
                        >
                            {weatherStore.weather.current.weatherDescription}
                        </Typography>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default observer(WeatherToday);
