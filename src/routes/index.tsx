import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import { observer } from "mobx-react-lite";

import Weather from "../components/weather";

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Weather} />
            </Switch>
        </HashRouter>
    );
};

export default observer(Routes);
