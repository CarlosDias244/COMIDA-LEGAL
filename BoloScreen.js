import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

export default function BoloScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}> Um Bolo de Chocolate fresquinho</Text>
    <Image
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4E6b08mEqh-gwyTHDkDGKa_bSWr3zIlMlg&s'}}
      style={styles.image}/>
      <Text style={styles.description}> Uma fatia irresistível de bolo de chocolate, perfeito para qualquer hora.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#p8p8pp',
    padding: 20,    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a2c2a',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#6b3e2e',
    borderWidth: 3,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5e403d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});
