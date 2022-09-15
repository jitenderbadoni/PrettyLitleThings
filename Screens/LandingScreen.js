import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { fetchUserInfo } from "../Store/action";
import { useDispatch, useSelector } from "react-redux";
import { CART_DETAIL } from "../Helper/ROUTE_NAMES";
import ProductCard from "../Components/ProductCard";
import { LANDING_SCREEN } from "../Constants/Component.testids";

const style = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center"
    },
    viewCartButtonContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    btnViewCart: {
        paddingVertical: 10,
        backgroundColor: "#6c0e78",
        paddingHorizontal: 20
    },
    btnText:{
        fontWeight: 'bold',
        color: "#fff"
    }
})


const LandingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, productList } = useSelector(state => state);
    const [showList, setShowList] = useState();

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [])

    useEffect(() => {
        setShowList(isLoading);
    }, [isLoading])
    
    const _renderItem = (productItem) => {
        const { item } = productItem;
        return (
            <ProductCard item={item} isCart={false}/>
        )
    }
    return (
        <>
        {
            !showList ? <View style={style.loadingContainer}><Text>{"Please wait..."}</Text></View>
            :
            <FlatList
                data={productList}
                keyExtractor={(item, index) => item.id + index}
                renderItem={_renderItem}
                ListFooterComponent={<View style={style.viewCartButtonContainer}><TouchableOpacity testID={LANDING_SCREEN.VIEW_CART_BUTTON} onPress={() => navigation.navigate(CART_DETAIL)} style={style.btnViewCart}><Text style={style.btnText}>View Cart</Text></TouchableOpacity></View>}
            />
        }
        </>
    )
}

export default LandingScreen;