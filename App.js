import React from 'react';
import{ View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({ Navigation})

import{ NavigationContainer} from '@react-navigation/native';
import{ createStackNavigator} from '@react-navigation/Stack';

import HomeScreen from './HomeScreen';
import SecondaryScreen from './SecondaryScreen';
import CafeScreen from './CafeScreen';
import BoloScreen from './BoloScreen';
import PaoScreen from './PaoScreen';

const Stack = createStackNavigator();

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