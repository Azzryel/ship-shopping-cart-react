import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {

    return (
        <nav>
            <h5> Jolly Roger! </h5>
            <div className="link-container"> 
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/shop">
                <span>Shop</span>
            </Link>
            <Link to="/cart">
                <span>Cart</span>
            </Link>
            </div>
        </nav>
    )
};

export default Nav;