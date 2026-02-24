import React from 'react'; // ✅ এটা missing ছিল
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../Screen/Splash/SplashScreen';
import SplashScreen1 from '../Screen/Splash/SplashScreen1';
import Welcome from '../Screen/Welcome/WelcomeScreen';
import LoginScreen from '../Screen/login/login';

export type RootStackParamList = {
  Splash: undefined;
  Splash1: undefined;
  Welcome: undefined;
  login: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
