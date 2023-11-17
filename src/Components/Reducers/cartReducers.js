import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState = {
    cart: []
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.id]
            };
        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item !== action.id);
            return {
                cart: remainingCart
            };
    }
};

export default cartReducers