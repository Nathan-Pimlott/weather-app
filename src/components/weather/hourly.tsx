import * as React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@material-ui/core";

interface IProps {
    weatherStore: any;
}

function WeatherHourly({ weatherStore }: IProps) {
    return (
        <Grid item xs={6} style={{ textAlign: "center", display: "flex" }}>
            <div
                style={{
                    borderRadius: 50,
                    backgroundColor: "darkGrey",
                    color: "white",
                    height: "auto",
                    width: 350,
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    padding: 20,
                }}
            >
                <div style={{ flex: 1, display: "flex" }}>
                    <Typography
                        variant="h4"
                        style={{ margin: "0 auto 10px auto" }}
                    >
                        Today
                    </Typography>
                </div>
                <Grid container>
                    {weatherStore.weather.hourly.today.map((hour, idx) => (
                        <RenderHour hour={hour} idx={idx} key={idx} />
                    ))}
                </Grid>
                {weatherStore.weather.hourly.tomorrow.length ? (
                    <React.Fragment>
                        <div style={{ flex: 1, display: "flex" }}>
                            <Typography
                                variant="h4"
                                style={{ margin: "20px auto 10px auto" }}
                            >
                                Tomorrow
                            </Typography>
                        </div>
                        <div>
                            {weatherStore.weather.hourly.tomorrow.map(
                                (hour, idx) => (
                                    <RenderHour
                                        hour={hour}
                                        idx={idx}
                                        key={idx}
                                    />
                                )
                            )}
                        </div>
                    </React.Fragment>
                ) : null}
            </div>
        </Grid>
    );
}

interface IRenderHourProps {
    hour: any;
    idx: number;
}

function RenderHour({ hour, idx }: IRenderHourProps) {
    return (
        <Grid item xs={12} style={{ display: "flex" }} key={idx}>
            <div
                style={{
                    margin: "auto",
                    display: "flex",
                }}
            >
                <Typography
                    style={{
                        margin: "auto 0",
                        fontWeight: "bold",
                    }}
                >
                    {hour.time}
                </Typography>
                <Typography
                    style={{
                        margin: "auto 10px",
                    }}
                >
                    {hour.temp}°C
                </Typography>
                <img
                    src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                    alt="weather icon"
                    style={{
                        height: 40,
                        width: "auto",
                    }}
                />
                <Typography
                    style={{
                        textTransform: "capitalize",
                        margin: "auto 0 auto 10px",
                    }}
                >
                    {hour.weatherDescription}
                </Typography>
            </div>
        </Grid>
    );
}

export default observer(WeatherHourly);
