import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import App from "../App";
import Shop from "./Shop";

const Routes = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
    );
};

export default Routes; 