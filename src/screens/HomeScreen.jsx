import React, { useEffect } from 'react';
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
} from "react-native"

import { useSelector, useDispatch } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store';
import { login, logout } from '../redux/slices/UserSlice';
import { setCities, setCitySelected } from '../redux/slices/CitySlice';
import { setFruits, setFruitSelected } from '../redux/slices/FruitSlice';

import { backendUrl } from '../utils/connectionBackend';
import axios from "axios";
import CitiesTab from '../components/CitiesTab';
import MainDiscount from '../components/MainDiscount';
import ContainerFruitsCards from '../components/ContainerFruitsCards';
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


const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  
  const user = useSelector((state) => state.user);
  const { cities, citySelected } =  useSelector((state) => state.city);
  const { fruits, fruitSelected } =  useSelector((state) => state.fruit);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
      <SafeAreaView
        style={{
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
          backgroundColor: "#fff"
        }}
      >
        <ScrollView>
          <ButtonSignOut navigation={navigation}/>
          <MainDiscount />
          <CitiesTab />
          <ContainerFruitsCards />

        </ScrollView>
      </SafeAreaView>
  )
}

export default withAuthenticator( HomeScreen );