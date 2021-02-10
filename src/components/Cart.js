import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {

    const location = useLocation();

    console.log(location)

    return (
        <div>
            Cart
        </div>
    )
}

export default Cart;