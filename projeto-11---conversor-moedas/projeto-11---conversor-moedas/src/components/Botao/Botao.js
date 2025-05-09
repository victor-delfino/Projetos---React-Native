import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const Botao = (props) => (
  <View style={styles.container}>
    <Button title={props.title} onPress={props.onPress} />
  </View>
);

export default Botao;