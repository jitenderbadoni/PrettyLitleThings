import { API_END_POINT } from "../Helper/API";
export const FETCH_ALL_ITEMS = "FETCH_ALL_ITEMS";
export const ALL_ITEMS_RECEIVED = "ALL_ITEMS_RECEIVED";
export const ADD_ITEM_IN_CART = "ADD_ITEM_IN_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";

export const fetchAllItems = () => {
    return {
      type: FETCH_ALL_ITEMS
    };
  };
  
  export const allItemReceived = (allItems) => {
    return {
      type: ALL_ITEMS_RECEIVED,
      payload: allItems
    };
  };
  
  export const addItemInCart = (item) => {
    return {
      type: ADD_ITEM_IN_CART,
      payload: item
    };
  };

  export const removeItemFromCart = (item) => {
    return {
      type: REMOVE_ITEM_FROM_CART,
      payload: item
    };
  };

  export const updateCart = (itemDetail) => {
    return {
      type: UPDATE_CART,
      payload: itemDetail
    };
  }

  
  export const fetchUserInfo = () => {
    return function (dispatch) {
      dispatch(fetchAllItems());
      return fetch(API_END_POINT)
        .then(data => data.json())
        .then(data => {
          dispatch(allItemReceived(data));
        })
        .catch(err => {console.log("There is error caught : ", err); allItemReceived([])});
    };
  };