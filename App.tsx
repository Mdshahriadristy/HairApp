import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreenAll from './Src/Screen/HomeScreenAppoinments/HomeScreenAll/HomeScreenAll';


// import RootNavigator from './Src/navigator/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <RootNavigator /> */}

      <HomeScreenAll/>




    </SafeAreaProvider>
  );
};

export default App;
