import React, { useState, useEffect} from 'react';
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
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

import { backendUrl } from '../utils/connectionBackend';
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/slices/UserSlice';
import { setCities, setCitySelected } from '../redux/slices/CitySlice';
import { setFruits, setFruitSelected } from '../redux/slices/FruitSlice';
import FruitCardCustomer from './FruitCardCustomer';
import ManagementCard from './ManagementCard';

import { io } from "socket.io-client";
//const socket = io(backendUrl);


const ContainerManagementCards = ({ fruitsGroupByCity }) => {

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
        <ScrollView
            showsVerticalScrollIndicator={ false }
        >

        {
            fruitsGroupByCity.map((group, index) => {
                return (
                    <ManagementCard key={index} group={group}/>
                )
            })
        }
        </ScrollView>
    </View>
  )
}

export default ContainerManagementCards