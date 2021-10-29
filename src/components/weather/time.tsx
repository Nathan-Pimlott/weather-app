import * as React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@material-ui/core";

interface IProps {
    clock: {
        date: string;
        time: string;
    };
}

const WeatherTime = ({ clock }: IProps) => {
    return (
        <React.Fragment>
            <Grid item xs={12} style={{ textAlign: "center", padding: 10 }}>
                <Typography variant="h5">{clock.date}</Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", padding: 0 }}>
                <Typography variant="h2">{clock.time}</Typography>
            </Grid>
        </React.Fragment>
    );
};

export default observer(WeatherTime);
