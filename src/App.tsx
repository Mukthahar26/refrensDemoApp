import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigators from './navigations/rootNavigators';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigators />
    </NavigationContainer>
  );
};

export default App;
