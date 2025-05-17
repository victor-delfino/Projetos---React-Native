import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Formacao() {
  return (
    <View>
      <Text style={styles.texto}>Formação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    margin: 20,
  },
});
