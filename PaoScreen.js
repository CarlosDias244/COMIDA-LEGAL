import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

export default function PaoScreen() {
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Um Pão fresquinho</Text>
    <Image
      source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C5BXqK3HMdM16TLYzlaFuddO4zM_9zW5BA&s'}}
      style={styles.image}/>
      <Text style={styles.description}>Comece o dia com um pão quentinho.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
    backgroundColor: '#f5f5dc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5c4033',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#d2b48c',
    borderWidth: 3,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#654321',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});


