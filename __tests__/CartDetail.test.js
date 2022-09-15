import "react";
import "react-native";
import { expect } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../Store/store";
import { productList } from "./mockData/mockListData";
import { addItemInCart } from "../Store/action";
import { CART_DETAIL, LANDING_SCREEN } from "../Constants/Component.testids";
import CartDetail from "../Screens/CartDetail";

test('Cart Detail screen with empty cart', () => {
    const component = render(<Provider store={store()}><CartDetail /></Provider>);
    const { getByTestId } = component;
    const btnLetsShop = getByTestId(CART_DETAIL.EMPTY_CART_BUTTON)
    expect(btnLetsShop).toBeTruthy();
});

test('Cart Detail screen with listed items', () => {
    store().dispatch(addItemInCart(productList[0]));
    store().dispatch(addItemInCart(productList[1]));
    store().dispatch(addItemInCart(productList[2]));
    const component = render(<Provider store={store()}><CartDetail /></Provider>);
    const { queryByTestId } = component;
    const btnLetsShop = queryByTestId(CART_DETAIL.EMPTY_CART_BUTTON);
    expect(btnLetsShop).toBeFalsy();
})