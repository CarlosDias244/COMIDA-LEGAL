import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

export default function PaoScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}> Um ótimo pão caseiro</Text>
    <Image
      source={{uri:'https://cozinhadoce.com.br/wp-content/uploads/2024/07/pao-caseiro-fofinho-receita-simples-e-deliciosa-para-o-seu-dia-a-dia-1024x683.jpg'}}
      style={styles.image}/>
      <Text style={styles.description}> O aroma e o sabor de um pão caseiro fresquinho, feito com carinho </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
    padding: 20,    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b4513',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#deb887',
    borderWidth: 3,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#a0522d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});
