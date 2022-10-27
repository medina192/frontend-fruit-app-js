/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppRoutes from './src/router/AppRoutes';
import LoginScreen from './src/screens/LoginScreen';
import { store } from './src/redux/store';
import { Provider } from 'react-redux'


const App = () => {

  return (
    <Provider store={ store }>
      <AppRoutes />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

//export default withAuthenticator(App)
export default App;

