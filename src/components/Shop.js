import React, { useState, useEffect } from "react";
import items from "./items";

const Shop = () => {
    const [ itemList, setItemList ] = useState(items);


    return (
        <div>
            <h1>Shop</h1>

            <div className="shop-container">
            {itemList.map( item => {
               return( 
                    <div className="item-container">
                        <h5>{item.name}</h5>
                        <img src={item.img} />
                        <p> {item.money} &#164; </p>
                    </div>
               );
            }) 
            }
            </div>
        </div>
    );
};

export default Shop;