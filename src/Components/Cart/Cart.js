import React from 'react';
import { removeFromCart } from '../../Redux/Actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h2>This is Cart</h2>
            <ul>
                {
                    cart.map(id => <li>{id} <button onClick={()=>removeFromCart(id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
};

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);