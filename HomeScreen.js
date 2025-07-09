import React from 'react';
import{ View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}> Página Principal </Text>
    <Button title= "Ir para opções deliciosas!!" onPress={() => navigation.navigate ('Secondary')} color="#841584"/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
   },
});

