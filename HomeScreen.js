import React from 'react';

import {NavigationContainer} from '@react-navigation/navite';
import {createStackNavigation} from '@react-navigation/stack';

import HomeScreen from './Screen/HomeScreen'

import SecondaryScreen from './SecondaryScreen';

import CafeScreen from './CafeScreen'

import BoloScreen from './BoloScreen';

import PaoScreen from './PaoScreen';

const Stack = creareStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" />
    <Stack.Screen name="Home" component={HomeScreen} options={{ title:'Bem-vindo!' }} />
    <Stack.Screen name="Secondary" component={SecondaryScreen} options={{ title: 'Opções Deliciosas' }} />
    <Stack.Screen name="Cafe" component={CafeScreen} options={{ title: 'Nosso Café'}} />
    <Stack.Screen name="Bolo" component={BoloScreen} options={{ title: 'Bolo de Chocolate'}} />
    <Stack.Screen name="Pao" component={PaoScreen} options={{ title:'Pão Caseiro' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}