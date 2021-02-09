import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <h5> Nav </h5>
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/shop">
                <span>Shop</span>
            </Link>
        </nav>
    )
};

export default Nav;