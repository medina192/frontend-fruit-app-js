import React from 'react';
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
import { login, logout } from '../redux/slices/UserSlice';
import { setCities, setCitySelected } from '../redux/slices/CitySlice';
import { setFruits, setFruitSelected } from '../redux/slices/FruitSlice';
import FruitCardCustomer from './FruitCardCustomer';

const ContainerFruitsCards = () => {

    const dispatch = useDispatch()
  
    const { cities, citySelected } =  useSelector((state) => state.city);
    const { fruits, fruitSelected } =  useSelector((state) => state.fruit);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

  return (
    <View
        style={{
            backgroundColor: "#f2f4f5",
            display: "flex",
            alignItems: "center"
        }}
    >
        {
            fruits.map((fruit, index) => {
                return (
                    <FruitCardCustomer key={ index } fruit={fruit} />
                )
            })
        }
    </View>
  )
}

export default ContainerFruitsCards