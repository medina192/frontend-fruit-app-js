import React from 'react'
import {
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";

import { Amplify, Auth } from 'aws-amplify';
import config from "../aws-exports";
import { withAuthenticator, Authenticator, AmplifyTheme } from 'aws-amplify-react-native';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const ButtonSignOut = ({ navigation }) => {

    const singOutCognito = async() => {
        try {
            Auth.signOut()
            navigation.navigate("Login")
        } catch (error) {
            console.log("error", error)
        }
    }

  return (
    <View
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        }}
    >

    <TouchableOpacity
        style={{
            backgroundColor: "#89d3a2",
            width: 90,
            height: 40,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginRight: 20
        }}
        onPress={ singOutCognito }
    >
        <Text style={{ fontWeight: "700", color: "#fff", fontSize: 18}}>Sign Out</Text>
    </TouchableOpacity>
    </View>
  )
}

export default ButtonSignOut