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
import BusniessSetup from '../Screen/BusniessSetup/BusniessSetup';
import BusniessSetup2 from '../Screen/BusniessSetup2/BusniessSetup2';
import BusniessSetup3 from '../Screen/BusniessSetup3/BusniessSetup3';
import PurchasePageScreen from '../Screen/Purches/PurchespageScreen';
import PurchasePage1Screen from '../Screen/Purches1/Purchespage1Screen';
import PurchasePage2Screen from '../Screen/Purches2/Purchespage2Screen';
import BottonTabs from './Buttontab';
import HomeScreenAll from '../Screen/HomeScreenAppoinments/HomeScreenAll/HomeScreenAll';
import AllPayments from '../Screen/HomeScreenAppoinments/All Payments/Allpayments';
import AllAppointment from '../Screen/HomeScreenAppoinments/All Apointments/AllAppointment';


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
  ProfileSetUp: undefined;
  BusniessSetup: undefined;
  BusniessSetup2: undefined;
  BusniessSetup3: undefined;
  Purches: undefined;
  Purches1: undefined;
  Purches2: undefined;
  ButtonTabs: undefined;
  HomeScreenAppoinments: undefined;
  AllPayments: undefined;
  AllAppointments: undefined;
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
        <Stack.Screen
          name="VerificationComplete"
          component={VerificationComplete}
        />
        <Stack.Screen name="ProfileSetUp" component={ProfileSetUp1Screen} />
        <Stack.Screen name="BusniessSetup" component={BusniessSetup} />
        <Stack.Screen name="BusniessSetup2" component={BusniessSetup2} />
        <Stack.Screen name="BusniessSetup3" component={BusniessSetup3} />
        <Stack.Screen name="Purches" component={PurchasePageScreen} />
        <Stack.Screen name="Purches1" component={PurchasePage1Screen} />
        <Stack.Screen name="Purches2" component={PurchasePage2Screen} />
        <Stack.Screen name="ButtonTabs" component={BottonTabs} />
        <Stack.Screen name="HomeScreenAppoinments" component={HomeScreenAll} />
        <Stack.Screen name="AllPayments" component={AllPayments} />
        <Stack.Screen name="AllAppointments" component={AllAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
