let myCart = [];

function addToCart(newItem) {
    
    if(myCart.length == 0) {
        myCart.push(newItem);
    }
    else {
        for(let i=0; i<=myCart.length; i++) {
            if (i === myCart.length) {
                myCart.push(newItem);
                break;
            }
            else if(myCart[i].item.name === newItem.item.name) {
                myCart[i].amount +=  newItem.amount;
                break;
            }
        }
    }
}

export { myCart, addToCart };
