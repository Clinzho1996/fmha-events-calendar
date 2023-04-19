import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import AppStack from './navigations/AppStack';

import React from 'react';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
