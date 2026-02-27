import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../Screen/Splash/SplashScreen';
import SplashScreen1 from '../Screen/Splash/SplashScreen1';
import Welcome from '../Screen/Welcome/WelcomeScreen';
import LoginScreen from '../Screen/login/login';
import SignUpScreen from '../Screen/SignUp/SignUpScreen';
import Setnewpass from '../Screen/SetnewPassword/Setnewpass';
import ConfirmPass from '../Screen/ConfirmedPassword/ConfirmPass';

export type RootStackParamList = {
  Splash: undefined;
  Splash1: undefined;
  Welcome: undefined;
  login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  SetnewPassword: undefined;
  ConfirmedPassword: undefined;

  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Splash1" component={SplashScreen1} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SetnewPassword" component={Setnewpass} />
        <Stack.Screen name="ConfirmedPassword" component={ConfirmPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
