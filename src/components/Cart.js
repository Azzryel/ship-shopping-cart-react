import React, { useState } from "react";
import { myCart } from "./myCart";
import uniqid from "uniqid";

const Cart = () => {

    const [ cart, setCart ] = useState(myCart);
    const  price =  myCart.map( item => {
                    return item.item.money;
                    } )
    const amount = myCart.map( item => {
                    return item.amount;
                    })
    const [ total, setTotal ] = useState( calculateTotal(price, amount) )

    function calculateTotal(price, times) {
        let total = 0;

        for(let i=0; i<price.length; i++) {
            total += ( price[i] * times[i]); 
        }
        return total;
    }

    return (
        <div>
           <h2>Cart</h2>
           {(cart.length > 0) ? (
               <div>
                   <table>
                       <tbody>
                       <tr>
                           <th>Name</th>
                           <th>Amount</th>
                           <th>Price</th>
                       </tr>
                       {cart.map( item => {
                           return (
                           <tr key={uniqid()}>
                               <td key={uniqid()}> {item.item.name} </td>
                               <td key={uniqid()}> {item.amount} </td>
                               <td key={uniqid()}> {item.item.money} &#164;</td>
                           </tr>
                           );
                       })}
                       <tr>
                           <th>Total</th>
                           <th> {total} &#164; </th>
                       </tr>
                       </tbody>
                   </table>
               </div>
           ) : (
               <div>Cart is empty</div>
           ) }
        </div>
    )
}

export default Cart;