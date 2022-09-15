import "react";
import "react-native";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react-native";
import LandingScreen from "../Screens/LandingScreen";
import { Provider } from "react-redux";
import store from "../Store/store";
import { productList } from "./mockData/mockListData";
import { allItemReceived } from "../Store/action";
import { LANDING_SCREEN } from "../Constants/Component.testids";

test('Product screen with listed product items', () => {
    store().dispatch(allItemReceived(productList));
    const component = render(<Provider store={store()}><LandingScreen /></Provider>);
    expect(component).toBeTruthy();
})

test('User should be able to view `View Cart` CTA', () => {
    const component = render(<Provider store={store()}><LandingScreen /></Provider>);
    store().dispatch(allItemReceived(productList));
    const { getByTestId } = component;
    const viewCartButton = getByTestId(LANDING_SCREEN.VIEW_CART_BUTTON);
    expect(viewCartButton).toBeTruthy();
})