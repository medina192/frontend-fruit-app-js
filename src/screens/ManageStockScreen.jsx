import React, { useState, useEffect } from 'react';
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
import { RootState, useAppDispatch } from '../redux/store';
import { login, logout } from '../redux/slices/UserSlice';
import { setCities, setCitySelected } from '../redux/slices/CitySlice';
import { setFruits, setFruitSelected } from '../redux/slices/FruitSlice';
import ContainerManagementCards from '../components/ContainerManagementCards';
import ModalManager from '../components/ModalManager';

import { backendUrl } from '../utils/connectionBackend';
import axios from "axios";
import ButtonSignOut from '../components/ButtonSignOut';

import { Amplify, Auth } from 'aws-amplify';
import config from "../aws-exports";
import { withAuthenticator, Authenticator, AmplifyTheme } from 'aws-amplify-react-native';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});



const ManageStockScreen = ({ navigation }) => {

    const user = useSelector((state) => state.user);
    const { cities, citySelected } =  useSelector((state) => state.city);
    const { fruits, fruitSelected } =  useSelector((state) => state.fruit);
    const { showModal } =  useSelector((state) => state.modal);

    const [loading, setLoading] = useState(false);

    const [fruitsGroupByCity, setFruitsGroupByCity] = useState([])
    const [updateStock, setUpdateStock] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get(`${backendUrl}/api/fruit`, )
        .then(function (response) {
            const fruitsGrouped = response.data.groups;
            setFruitsGroupByCity(fruitsGrouped)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => setLoading(false))

    }, [updateStock])



  return (
    <SafeAreaView
        style={{
            marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            backgroundColor: "#f2f4f5",
            position: "relative"
        }}
    >

        <ButtonSignOut navigation={navigation}/>
        {
            //loading && <ActivityIndicator size="large" color="#00ff00" />
        }
        <ContainerManagementCards fruitsGroupByCity={ fruitsGroupByCity } />
        { showModal && <ModalManager setUpdateStock={ setUpdateStock } updateStock= { updateStock } />}
    </SafeAreaView>
  )
}

export default ManageStockScreen;

/*
const signUpConfig = {
    header: "My Custom",
    hideAllDefaults: true,
    hideSignUp: true
}

const signInConfig = {
    header: "My Custom",
    hideAllDefaults: true,
    hideSignUp: true
}

const customTheme = {
    ...AmplifyTheme,
    button: {
        ...AmplifyTheme.button,
        backgroundColor: "blue"
    }
}

export default withAuthenticator(ManageStockScreen,  { signInConfig, signUpConfig, theme: customTheme }   )

*/
/*

        <SafeAreaView
            style={{
                marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
                backgroundColor: "#f2f4f5",
                position: "relative"
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: "#f00",
                    paddingHorizontal: 4,
                    paddingVertical: 4,
                }}
                onPress={ singOutCognito }
            >
                <Text style={{ color: "#fff", fontSize: 18}}>Sign Out</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "700", marginVertical: 15, textAlign: "center"}}>
                {"Hi " + user.name}
            </Text>
            {
                //loading && <ActivityIndicator size="large" color="#00ff00" />
            }
            <ContainerManagementCards fruitsGroupByCity={ fruitsGroupByCity } />
            { showModal && <ModalManager setUpdateStock={ setUpdateStock } updateStock= { updateStock } />}
        </SafeAreaView>
*/