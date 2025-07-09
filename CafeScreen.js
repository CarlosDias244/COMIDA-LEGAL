import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

export default function CafeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}> Um café fresquinho</Text>
    <Image
      source={{uri:'https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg'}}
      style={styles.image}/>
      <Text style={styles.description}> Comece o dia com uma xícara de café aromático e revigorante</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
