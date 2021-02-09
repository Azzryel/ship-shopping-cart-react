import React, { useState, useEffect } from "react";
import items from "./items";
import uniqid from "uniqid";

const Shop = () => {
    const [ itemList, setItemList ] = useState(items);


    return (
        <div>
            <h1>Shop</h1>

            <div className="shop-container">
            {itemList.map( item => {
               return( 
                    <div key={uniqid()} className="item-container">
                        <h5 key={uniqid()}>{item.name}</h5>
                        <img key={uniqid()} src={item.img} />
                        <p key={uniqid()}> {item.money} &#164; </p>
                    </div>
               );
            }) 
            }
            </div>
        </div>
    );
};

export default Shop;