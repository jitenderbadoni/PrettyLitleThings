import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./Screens/LandingScreen";
import CartDetail from "./Screens/CartDetail";
import { LANDING_SCREEN, CART_DETAIL } from "./Helper/ROUTE_NAMES";
import { Provider } from "react-redux";
import store from "./Store/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={LANDING_SCREEN} options={{ title: "Product List"}} component={LandingScreen}></Stack.Screen>
          <Stack.Screen name={CART_DETAIL} options={{ title: "Checkout"}} component={CartDetail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}