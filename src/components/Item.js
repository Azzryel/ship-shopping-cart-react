import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import items from "./items";
import { addToCart } from "./myCart";

const Item = ({match}) => {

    const itemGot = items.find( item => item.id == parseInt(match.params.id));
    const [ item, setItem ] = useState(itemGot);
    const [ amount, setAmount ] = useState(0);
    let history = useHistory();


    function handleChange(e) {
        setAmount(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let newItem = {
                item,
                amount: parseInt(amount), 
            };
        addToCart(newItem);
        history.push("/shop");
    }

    return (
        <div>
            {(Boolean(item)) ? (
            <div>
            <h2> {item.name} </h2>
                <div>
                    <img src={item.img} />

                    <div>
                        <p> Price: {item.money} &#164; </p>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="number" max="10" min="1" defaultValue="0" />
                            <button type="submit">Add to cart</button>
                        </form>
                    </div>
                    

                    <p> {item.descr} </p>

                </div>
                </div>

        ) : ( 
            <div>
                No items found.
            </div>
        ) }
        
        </div>
    )
}

export default Item;