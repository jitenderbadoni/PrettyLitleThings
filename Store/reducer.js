import {
    ADD_ITEM_IN_CART,
    ALL_ITEMS_RECEIVED,
    FETCH_ALL_ITEMS,
    REMOVE_ITEM_FROM_CART,
    UPDATE_CART
} from "./action";

const initialState = {
    productList: [],
    cartItems: [],
    isLoading: false,
};

const store = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM_IN_CART:
        state.cartItems.push(action.payload);
        return Object.assign({}, state);
    case ALL_ITEMS_RECEIVED:
        state.isLoading = false;
        state.productList = action.payload;
        return Object.assign({}, state);
    case FETCH_ALL_ITEMS:
        state.isLoading = true;
        return Object.assign({}, state);
    case REMOVE_ITEM_FROM_CART:
        const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id);
        state.cartItems = updatedCart;
        return Object.assign({}, state);
    case UPDATE_CART:
        return Object.assign({}, state);
    default:
        return state;
    }
};
  
export default store;