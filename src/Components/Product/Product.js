import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, id} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <h2>{name}</h2>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Product;