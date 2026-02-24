import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from './Src/Screen/SignUp/SignUpScreen';
// import RootNavigator from './Src/navigator/RootNavigator';

// import SplashScreen from './Src/Screen/Splash/SplashScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <RootNavigator /> */}
      <SignUpScreen />
    </SafeAreaProvider>
  );
};

export default App;
