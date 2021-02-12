import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import items from "./items";
import uniqid from "uniqid";
import "../styles/Shop.css";

const Shop = () => {
    const [ itemList, setItemList ] = useState(items);


    return (
        <div className="shop">
            <h1>Jolly Roger Ships</h1>

            <div className="shop-container">
            {itemList.map( item => {
               return( 
                    <Link key={uniqid()} to={`/shop/${item.id}`} >
                    <div key={uniqid()} className="item-container">
                        <h5 key={uniqid()} className="h5-shop">{item.name}</h5>
                        <img key={uniqid()} src={item.img} />
                        <p key={uniqid()} className="p-shop"> {item.money} &#164; </p>
                    </div>
                    </Link>
               );
            }) 
            }
            </div>
        </div>
    );
};

export default Shop;