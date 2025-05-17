import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Experiencia() {
  return (
    <View>
      <Text style={styles.texto}>Experiência</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    margin: 20, 
  },
});
