import React, { useState, useEffect } from "react";
import items from "./items";

const Item = ({match}) => {
    console.log(match)
    console.log(match.params.id)
    const itemGot = items.find( item => item.id == parseInt(match.params.id));
    const [ item, setItem ] = useState(itemGot);
    console.log(item)


    return (
        <div>{item.name}</div>
    )
}

export default Item;