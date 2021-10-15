
import React from 'react';

const Cart = (props) => {
    const cart = (props.cart);
    let total = 0;
    let proPrice;
    for (let i = 0; i < cart.length; i++) {
        const lopedProductsDetail = cart[i];
        proPrice = lopedProductsDetail.price;
        total = total + proPrice;
    }
    const tax = (total / 10);
    const grandTotal = tax + total;
    const formateNum = (num) => {
        const doFixed = num.toFixed(2);
        return Number(doFixed);
    }
    return (
        <div>
            <p>cart component-{props.productAdded}</p>
            <p>product added:  {cart.length}</p>
            <p>product price: {formateNum(total)}</p>
            <p> tax:  {formateNum(tax)}</p>
            <p>grandTotal: {formateNum(grandTotal)}</p>
        </div>
    );
};

export default Cart;