import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'Asus Laptop', id: 1},
        {name: 'Lenovo Laptop', id: 2},
        {name: 'HP Laptop', id: 3},
        {name: 'Samsung Laptop', id: 4}
    ]
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
        case ADD_TO_CART:
            const newCart = [...state.cart, action.id];
            return {...state, cart: newCart};
        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item !== action.id);
            return {...state, cart: remainingCart};
    }
};

export default cartReducers; 