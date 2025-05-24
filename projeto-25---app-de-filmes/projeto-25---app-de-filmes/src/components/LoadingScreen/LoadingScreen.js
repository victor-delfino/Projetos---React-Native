import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './loadingScreenStyles';

export default function LoadingScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando filmes...</Text>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}
