import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../enums/constants';
import Home from '../screens/Home';
import CharacterDetails from '../screens/CharacterDetails';

export type RootStackParamList = {
  HOME: undefined;
  CHARACTERDETAILS: {characterDetails: any};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen
        name={screenNames.CHARACTERDETAILS}
        component={CharacterDetails}
      />
    </Stack.Navigator>
  );
};

export default RootNavigators;
