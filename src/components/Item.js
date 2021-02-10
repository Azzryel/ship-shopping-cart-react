import React, { useState, useEffect } from "react";
import items from "./items";

const Item = ({match}) => {

    const itemGot = items.find( item => item.id == parseInt(match.params.id));
    const [ item, setItem ] = useState(itemGot);


    return (
        <div>
            {(Boolean(item)) ? (
            <div>
            <h2> {item.name} </h2>
                <div>
                    <img src={item.img} />
                    

                    <p> {item.descr} </p>
                    <p> Price: {item.money} &#164; </p>


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