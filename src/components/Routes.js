import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/reset.css";
import Nav from "./Nav";
import App from "../App";
import Shop from "./Shop";
import Item from "./Item";
import Cart from "./Cart";

const Routes = () => {
    return (
        <Router>
            <div className="cover">
                <Nav />
                <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/shop" component={Shop} />
                <Route  path="/shop/:id" component={Item} />
                <Route exact path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>
    );
};

export default Routes; 