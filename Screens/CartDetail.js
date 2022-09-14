import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";


const CartDetail = ({ navigation }) => {
    const { cartItems } = useSelector(state => state);
    return (
        <FlatList
            data={cartItems}
            keyExtractor={(_item) => "cartItem"+ _item.id}
            renderItem={({ item }) => <ProductCard item={item} isCart={true}/> }
            ListEmptyComponent={<View style={{marginTop: 20, justifyContent: 'center', alignItems:'center'}}><TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ fontSize: 20, textDecorationLine:'underline'}}>Let's Shop!</Text></TouchableOpacity></View>}
            ListFooterComponent={cartItems.length > 0 && <View style={{ marginTop: 10,  alignItems:'center', justifyContent:'center'}}><TouchableOpacity onPress={() => navigation.goBack()} style={{paddingVertical: 10, backgroundColor: "red", paddingHorizontal: 20}}><Text>Go Back</Text></TouchableOpacity></View>}
        />
    )
}

export default CartDetail;