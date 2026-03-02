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
import CreateAccount from '../Screen/CreateAccount/CreateAccount';
import Verification2 from '../Screen/Verifiacation2/Verification2';
import VerificationComplete from '../Screen/VerificationComplete/VerificationComplete';
import ProfileSetUp1Screen from '../Screen/ProfileSetUp/ProfileSetUp1';

export type RootStackParamList = {
  Splash: undefined;
  Splash1: undefined;
  Welcome: undefined;
  login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  SetnewPassword: undefined;
  ConfirmedPassword: undefined;
  CreateAccount: undefined;
  Verification2: undefined;
  VerificationComplete: undefined;
  ProfileSetUp:undefined;

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
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Verification2" component={Verification2} />
        <Stack.Screen name="VerificationComplete" component={VerificationComplete} />
        <Stack.Screen name="ProfileSetUp" component={ProfileSetUp1Screen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
