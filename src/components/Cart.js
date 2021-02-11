import React, { useState } from "react";
import { myCart } from "./myCart";

const Cart = () => {

    const [ cart, setCart ] = useState(myCart);

    console.log(cart)



    return (
        <div>
            Cart
        </div>
    )
}

export default Cart;