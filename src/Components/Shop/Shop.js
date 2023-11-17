import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../Redux/Actions/cartActions';
import { connect } from 'react-redux';


const Shop = (props) => {
    console.log(props);
    const {products, addToCart} = props;
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(product => 
                <Product product={product} id={product.id} addToCart={addToCart}></Product>
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
};

const mapDispatchToProps = {
    addToCart: addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);