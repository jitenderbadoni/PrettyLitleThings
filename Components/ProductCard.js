import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { addItemInCart, removeItemFromCart } from '../Store/action';
import { useDispatch, useSelector } from "react-redux";

const style = StyleSheet.create({
    listItemStyle: {
        paddingVertical: 20,
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 2,
        paddingHorizontal: 10
    },
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemContainer: {
        flexDirection: 'row'
    },
    itemLabel: {
        fontWeight: 'bold',
        paddingRight: 10
    },
    btnText:{
        fontWeight: "bold",
        color: "#fff"
    },
    productImage: {
        height: 100,
        width: 100
    },
    btnStyle:{
        alignItems:'center', paddingVertical: 5, paddingHorizontal: 10
    },
    imageContainer: { 
        flex: 1, 
        alignItems: "flex-end"
    }
})
const List = ({ item, isCart }) => {
    const dispatch = useDispatch();
    const actionMethod = (item) => isCart ? removeItemFromCart(item) : addItemInCart(item);
    return (
        <View style={style.listItemStyle}>
        <View>
            <Text>Product Detail</Text>
        </View>
        <View style={style.listItemContainer}>
                <View style={{ flex: 1}}>
                    <View><Text>{item.name}</Text></View>
                    <View style={style.itemContainer}>
                        <Text style={style.itemLabel}>Color:</Text>
                        <Text>{item.colour}</Text>
                    </View>
                    <View style={style.itemContainer}>
                        <Text style={style.itemLabel}>Price:</Text>
                        <Text>{item.price}</Text>
                    </View>
                        <View style={{marginTop: 10}}>
                            <TouchableOpacity
                                onPress={() => dispatch(actionMethod(item))}
                                style={[style.btnStyle, { backgroundColor: isCart ? "#b0687a" : "#5c8057" }]}>
                                <Text style={style.btnText}>{ !isCart ? 'Add to cart' : 'Remove from Cart'}</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={style.imageContainer}>
                    <Image resizeMode="contain" source={{ uri: item.img}} style={style.productImage}/>
                </View>
            </View>
        </View>
    );
}


export default List;