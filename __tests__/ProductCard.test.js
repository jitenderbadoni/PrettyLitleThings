import "react";
import "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import ProductCard from "../Components/ProductCard";
import { Provider } from "react-redux";
import store from "../Store/store";
import { PRODUCT_CARD } from "../Constants/Component.testids";

const itemObject = {
    "id": 1,
    "colour": "Black",
    "name": "Black Sheet Strappy Textured Glitter Bodycon Dress",
    "price": 10,
    "img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
  };
test('Product card render without any issue', async () => {
    const component = render(<Provider store={store()}><ProductCard item={itemObject} isCart={true}/></Provider>);
    expect(component).toBeTruthy();
})

test('Product card render with all the required details in Landing Screen', async () => {
  const component = render(<Provider store={store()}><ProductCard item={itemObject} isCart={false}/></Provider>);
  const { getByTestId } = component;
  const productName = getByTestId(PRODUCT_CARD.PRODUCT_NAME);
  const productColor = getByTestId(PRODUCT_CARD.PRODUCT_COLOR);
  const productPrice = getByTestId(PRODUCT_CARD.PRODUCT_PRICE);
  expect(productName.children[0]).toBe(itemObject.name);
  expect(parseInt(productPrice.children[0])).toBe(itemObject.price);
  expect(productColor.children[0]).toBe(itemObject.colour);
  const btnCartButton = getByTestId(PRODUCT_CARD.CART_BUTTON);
  fireEvent(btnCartButton, "onPress");
});

test('Product card render with all the required details in Cart Screen', async () => {
  const component = render(<Provider store={store()}><ProductCard item={itemObject} isCart={true}/></Provider>);
  const { getByTestId } = component;
  const productName = getByTestId(PRODUCT_CARD.PRODUCT_NAME);
  const productColor = getByTestId(PRODUCT_CARD.PRODUCT_COLOR);
  const productPrice = getByTestId(PRODUCT_CARD.PRODUCT_PRICE);
  expect(productName.children[0]).toBe(itemObject.name);
  expect(parseInt(productPrice.children[0])).toBe(itemObject.price);
  expect(productColor.children[0]).toBe(itemObject.colour);
  const btnCartButton = getByTestId(PRODUCT_CARD.CART_BUTTON);
  fireEvent(btnCartButton, "onPress");
})