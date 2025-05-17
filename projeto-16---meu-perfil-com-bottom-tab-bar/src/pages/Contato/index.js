import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View>
      <Text style={styles.texto}>Contato</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,       
    margin: 20          
  },
});
