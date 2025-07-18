import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import SecondaryScreen from './screen/SecondaryScreen';
import CafeScreen from './screen/CafeScreen';
import BoloScreen from './screen/BoloScreen';
import PaoScreen from './screen/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-Vindo!' }}/>
        <Stack.Screen name='Secondary' component={SecondaryScreen} options={{ title: 'Opções Deliciosas' }}/>
        <Stack.Screen name='Cafe' component={CafeScreen} options={{ title: 'Nosso Café' }}/>
        <Stack.Screen name='Bolo' component={BoloScreen} options={{ title: 'Bolo de Chocolate' }}/>
        <Stack.Screen name='Pao' component={PaoScreen} options={{ title: 'Pão Caseiro' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
