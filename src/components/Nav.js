import React, { useState, useEffect } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import "../styles/nav.css";
import { myCart } from "./myCart";

const Nav = () => {

    const [ inCart, setInCart ] = useState(myCart.length);
    const location = useLocation();

    useEffect(() => {
        update();
    }, [location]);


    function update() {
        setInCart(myCart.length);
    }

    return (
        <nav>
            <h5> Jolly Roger! </h5>
            <div className="link-container"> 
            <Link to="/"  >
                <span>Home</span>
            </Link>
            <Link to="/shop"  >
                <span>Shop</span>
            </Link>
            <Link to="/cart"  >
                <span>Cart { (inCart>0) ? (
                    <em>({inCart}) </em>
                ) : (
                    ""
                ) } </span>
            </Link>
            </div>
        </nav>
    )
};

export default withRouter(Nav);