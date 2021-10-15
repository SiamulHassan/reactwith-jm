import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    function clickHandler(product) {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product =>
                        <Products
                            isHandledBtn={clickHandler}
                            products={product}> {product.name}

                        </Products>
                    )
                }
            </div>
            <div className="cart_container">
                <Cart
                    cart={cart}
                >

                </Cart>
            </div>
        </div>
    );
};

export default Shop;