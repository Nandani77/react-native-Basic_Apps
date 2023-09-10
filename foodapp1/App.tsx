import React from 'react';

import {View} from 'react-native';
//import WelcomeScreen from './src/screens/LoginSignupScreen/WelcomeScreen';
//import LoginScreen from './src/screens/LoginSignupScreen/LoginScreen';
import RootNavigation from './src/RootNavigation';
//import Kconss from './src/screens/LoginSignupScreen/Kconss';
export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Kconss /> */}
      <RootNavigation />
    </View>
  );
}
