let myCart = [];

function addToCart(newItem) {
    
    if(myCart.length == 0) {
        console.log("1st")
        myCart.push(newItem);
    }
    else {
        for(let i=0; i<=myCart.length; i++) {
            if (i === myCart.length) {
                console.log("2nd add if not")
                myCart.push(newItem);
                break;
            }
            else if(myCart[i].item.name === newItem.item.name) {
                console.log("3rd merge")
                console.log(myCart[i].item.name)
                console.log(newItem.item.name)
                myCart[i].amount +=  newItem.amount;
                break;
            }
        }
    }
}

export { myCart, addToCart };
