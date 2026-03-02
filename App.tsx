import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ProfileSetUp1 from './Src/Screen/ProfileSetUp/ProfileSetUp1';



import RootNavigator from './Src/navigator/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />

      {/* <ProfileSetUp1/> */}

    </SafeAreaProvider>
  );
};

export default App;
