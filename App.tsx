import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CreateAccount from './Src/Screen/CreateAccount/CreateAccount';

// import RootNavigator from './Src/navigator/RootNavigator';


const App = () => {
  return (
    <SafeAreaProvider>
      {/* <RootNavigator /> */}


      <CreateAccount/>


    </SafeAreaProvider>
    
  );
};

export default App;
