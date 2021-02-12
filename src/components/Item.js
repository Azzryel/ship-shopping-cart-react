import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import items from "./items";
import { addToCart } from "./myCart";
import "../styles/item.css";

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
        <div className="big-container">
            {(Boolean(item)) ? (
            <div className="container-itm">
            <h2 className="h2-item"> {item.name} </h2>
                <div className="small-container">
                    <img src={item.img} id="display"/>

                    <div className="pricetag">
                        <p className="price"> Price: {item.money} &#164; </p>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="number" max="10" min="1" defaultValue="0" />
                            <button type="submit">Add to cart</button>
                        </form>
                    </div>
                    

                    <p className="descr"> {item.descr} </p>

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