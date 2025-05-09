import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const CampoTexto = (props) => (
  <View style={styles.container}>
    <Text>{props.label}</Text>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType || 'default'}
    />
  </View>
);

export default CampoTexto;