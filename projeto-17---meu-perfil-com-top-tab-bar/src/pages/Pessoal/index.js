import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pessoal() {
  return (
    <View>
      <Text style={styles.texto}>Pessoal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,       
    margin: 20          
  },
});
