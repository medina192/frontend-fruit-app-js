import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";

import { useSelector, useDispatch } from 'react-redux'
import { setModalValue } from '../redux/slices/ModalSlice';
import { setCities, setCitySelected } from '../redux/slices/CitySlice';
import { setFruits, setFruitSelected } from '../redux/slices/FruitSlice';


const StockManagerCard = ({ fruit }) => {

    const dispatch = useDispatch()

    const { _id, name, imgUrl, price, score, stock, cityId, cityName } = fruit;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const { cities, citySelected } =  useSelector((state) => state.city);
    const { fruits, fruitSelected } =  useSelector((state) => state.fruit);
    const { showModal } =  useSelector((state) => state.modal);

    const openModal = () => {
        dispatch(setFruits({
            fruits,
            fruitSelected: {
                _id,
                name,
                imgUrl,
                price, 
                stock,
                score
            }
        }));

        dispatch(setCitySelected({
            cities,
            citySelected: {
                _id: cityId,
                name: cityName,
            }
        }));

        dispatch(setModalValue({
            showModal: true
        }));
    }

  return (
    <View
        style={{
            backgroundColor: "#fff",
            width: windowWidth * 0.85,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5,
        }}
    >
        <Text style={{ fontSize: 18, fontWeight: "500", width:"30%"}} >{ name }</Text>
        
        <View
            style={{
                width:"30%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: "400",}} >{ "stock: " }</Text>
            <Text style={{ fontSize: 18, fontWeight: "500",}} >{ stock }</Text>
        </View>

        <TouchableOpacity
            style={{
                backgroundColor: "#46a97b",
                paddingVertical: 8,
                borderRadius: 5,
                width: 65
            }}
            onPress={ openModal }
        >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center"}} >Send</Text>
        </TouchableOpacity>
    </View>
  )
}

export default StockManagerCard