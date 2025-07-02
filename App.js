import React from 'react';

import{ NavigationContainer} from '@react-navigation/native';
import{ createStackNavigation} from '@react-navigation/Stack';

import HomeScreen from './Salaminion.Screen/HomeScreen';
import SecondaryScreen from './Salaminion.Screen/SecondaryScreen';
import CafeScreen from './Salaminion.Screen/CafeScreen';
import BoloScreen from './Salaminion.Screen/BoloScreen';
import PaoScreen from './Salaminion.Screen/PaoScreen';

const Stack = createStackNavigation();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo!' }}/>

      <Stack.Screen name="Secondary" component={SecondaryScreen} options={{ title: 'Opções Deliciosas' }}/>

      <Stack.Screen name="Cafe" component={CafeScreen} options={{ title: 'Nosso Café' }}/>

      <Stack.Screen name="Bolo" component={BoloScreen} options={{ title: 'Bolo de Chocolate' }}/>

      <Stack.Screen name="Pao" component={PaoScreen} options={{ title: 'Pão Caseiro' }}/>
      </Stack.Navigator>
      </NavigationContainer>

  );
}