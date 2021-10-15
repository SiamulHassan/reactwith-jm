import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Products.css';
const Products = (props) => {
    console.log(props);
    const { name, img, price, seller, stock } = props.products;
    return (
        <div className='product_container1'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p> {name} </p>
                <p> price: {price} </p>
                <p> selling by {seller} </p>
                <p> In stock : {stock} </p>
                <button onClick={() => props.isHandledBtn(props.products)} className="product_btn"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div>
    );
};
// img price seller stock 
export default Products;